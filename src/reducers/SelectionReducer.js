export default (state = null, action) => {
  console.log('==>selectionReducer action: ', action, 'State: ', state)
  switch (action.type) {
    case 'select_library':
      return action.payload;
    default:
      return state;
  }
};
