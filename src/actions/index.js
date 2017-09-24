export const selectUser = (post) => {
    console.log('==>Action creator function, post: ', post)
  return {
    type: 'select_user',
    payload: post
  };
};
