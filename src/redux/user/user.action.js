export const storeUser = (payload) => ({
  type: 'storeUser',
  payload,
});

export const removeUser = () => ({
  type: 'removeUser',
});

export const setUserPosts = (payload) => ({
  type: 'setUserPosts',
  payload,
});

export const setEditPost = (payload) => ({
  type: 'setEditPost',
  payload,
});
