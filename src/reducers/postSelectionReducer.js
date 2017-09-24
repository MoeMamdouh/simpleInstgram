export default (state = null, action) => {
  console.log('==>postSelectionReducer action: ', action, 'State: ', state)
  switch (action.type) {
    case 'select_user':
      return action.payload;
    default:
      return state;
  }
};
