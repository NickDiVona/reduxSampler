const INITIAL_STATE = 'lightsalmon';

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_COLOR':
      if (state === INITIAL_STATE) {
        return 'lightgreen';
      } else if (state === 'lightgreen') {
        return 'lightyellow';
      } else {
        return 'lightsalmon';
      }

    case 'RESET_COLOR':
      return INITIAL_STATE;

    default:
      return state;
  }
};
