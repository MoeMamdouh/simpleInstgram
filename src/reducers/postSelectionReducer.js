import { SELECT_USER } from './../actions/types';

export default (state = {}, action) => {
  console.log('##>postSelectionReducer action: ', action, 'State: ', state)
  switch (action.type) {
    case SELECT_USER:
      return action.payload;
    default:
      return state;
  }
};
