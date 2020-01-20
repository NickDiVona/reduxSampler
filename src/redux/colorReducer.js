const INITIAL_STATE = 'lightsalmon';

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_COLOR':
      return action.payload;

    case 'RESET_COLOR':
      return INITIAL_STATE;

    default:
      return state;
  }
};
