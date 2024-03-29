import React from 'react';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import axios from 'axios';
import Cookies from 'js-cookie';
import slugify from 'slugify';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Loader from '../loader/loader.component';
import { setLoadingStateTrue, setLoadingStateFalse } from '../../redux/ui/ui.action';

import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import * as S from './rte.style';
import './rte.style.css';

class Rte extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.editPost) {
      const content = this.props.editPost.content;
      const contentBlock = htmlToDraft(content);
      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
      const editorState = EditorState.createWithContent(contentState);
      this.state = {
        editorState,
        title: this.props.editPost.title,
      };
    } else {
      this.state = {
        editorState: EditorState.createEmpty(),
        title: '',
      };
    }
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      ...this.state,
      editorState,
    });
  };

  publishPost = () => {
    this.props.setLoadingStateTrue();
    const content = draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()));
    const cookies = Cookies.get('jwt');
    const title = this.state.title;
    // Remove all special characters & to be lowercase only to comply with Strapi slug formation
    const cleanedTitle = title.replace(/[^a-zA-Z ]/g, '').toLowerCase();
    const data = {
      title,
      content,
      slug: slugify(cleanedTitle),
      users_permissions_user: this.props.user.id,
    };
    if (process.env.NODE_ENV === 'production') {
      axios
        .post('https://cowy-strapi.herokuapp.com/posts', data, { headers: { Authorization: `Bearer ${cookies}` } })
        .then((response) => {
          this.props.setLoadingStateFalse();
          this.props.history.push(`/my-posts`);
        })
        .catch((error) => {
          console.log(error);
          this.props.setLoadingStateFalse();
        });
      return;
    }
    axios
      .post('http://localhost:1337/posts', data, { headers: { Authorization: `Bearer ${cookies}` } })
      .then((response) => {
        this.props.setLoadingStateFalse();
        this.props.history.push(`/my-posts`);
      })
      .catch((error) => {
        console.log(error);
        this.props.setLoadingStateFalse();
      });
  };

  updatePost = () => {
    this.props.setLoadingStateTrue();
    const content = draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()));
    const cookies = Cookies.get('jwt');
    const title = this.state.title;
    // Remove all special characters & to be lowercase to comply with Strapi slug formation
    const cleanedTitle = title.replace(/[^a-zA-Z ]/g, '').toLowerCase();
    const data = {
      title,
      content,
      slug: slugify(cleanedTitle),
    };

    if (process.env.NODE_ENV === 'production') {
      axios
        .put(`https://cowy-strapi.herokuapp.com/posts/${this.props.editPost.id}`, data, { headers: { Authorization: `Bearer ${cookies}` } })
        .then((response) => {
          this.props.setLoadingStateFalse();
          this.props.history.push(`/posts/${this.props.editPost.id}`);
        })
        .catch((error) => {
          console.log(error);
          this.props.setLoadingStateFalse();
        });
      return;
    }
    axios
      .put(`http://localhost:1337/posts/${this.props.editPost.id}`, data, { headers: { Authorization: `Bearer ${cookies}` } })
      .then((response) => {
        this.props.setLoadingStateFalse();
        this.props.history.push(`/posts/${this.props.editPost.id}`);
      })
      .catch((error) => {
        console.log(error);
        this.props.setLoadingStateFalse();
      });
  };

  deletePost = () => {
    this.props.setLoadingStateTrue();
    const cookies = Cookies.get('jwt');

    if (process.env.NODE_ENV === 'production') {
      axios
        .delete(`https://cowy-strapi.herokuapp.com/posts/${this.props.editPost.id}`, { headers: { Authorization: `Bearer ${cookies}` } })
        .then((response) => {
          this.props.setLoadingStateFalse();
          this.props.history.push('/my-posts');
        })
        .catch((error) => {
          console.log(error);
          this.props.setLoadingStateFalse();
        });
      return;
    }
    axios
      .delete(`http://localhost:1337/posts/${this.props.editPost.id}`, { headers: { Authorization: `Bearer ${cookies}` } })
      .then((response) => {
        this.props.setLoadingStateFalse();
        this.props.history.push('/my-posts');
      })
      .catch((error) => {
        console.log(error);
        this.props.setLoadingStateFalse();
      });
  };

  addThemeClass = () => {
    switch (this.props.theme) {
      case 'sepia':
        return `sepia`;
      case 'dark':
        return 'dark';
      default:
        return 'light';
    }
  };

  render() {
    return (
      <S.Container>
        <S.Label>Post Title:</S.Label>
        <S.Input
          type='text'
          minLength='3'
          required
          onChange={(e) => {
            this.setState({ ...this.state, title: e.target.value });
          }}
          defaultValue={`${this.props.editPost.title || ''}`}
        />
        <Editor
          placeholder='Write your content here...'
          editorState={this.state.editorState}
          onEditorStateChange={this.onEditorStateChange}
          editorClassName={`editor ${this.addThemeClass()}`}
          toolbarClassName={`toolbar ${this.addThemeClass()}`}
          toolbar={{
            options: ['inline', 'blockType', 'fontSize', 'list', 'textAlign', 'colorPicker', 'link', 'emoji', 'remove', 'history'],
          }}
        />
        {this.props.editPost.content ? (
          <div>
            <S.Publish onClick={this.updatePost}>Save</S.Publish>
            <S.Publish onClick={this.deletePost} style={{ 'margin-left': '5px' }}>
              Delete
            </S.Publish>
          </div>
        ) : (
          <S.Publish onClick={this.publishPost}>Publish</S.Publish>
        )}
        {this.props.isLoading ? <Loader /> : null}
      </S.Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    theme: state.theme.theme,
    user: state.user.user,
    isLoading: state.ui.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setLoadingStateTrue: () => dispatch(setLoadingStateTrue()),
  setLoadingStateFalse: () => dispatch(setLoadingStateFalse()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Rte));

// Credit to https://github.com/jpuri/react-draft-wysiwyg
