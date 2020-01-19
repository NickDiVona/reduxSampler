// set up something as initial state
const INITIAL_STATE = 0;

// export a function, this is your reducer
// it should take in state and an action, if there isn't any state, set state to INITIAL_STATE which we have defined above
export default (state = INITIAL_STATE, action) => {
  // switch statement, similar to an if/else
  switch (action.type) {
    // if this is the action.type do whatever is below
    case 'INCREMENT_COUNT':
      return state + 1;
    // if this is the action.type do whatever is below
    case 'RESET_COUNT':
      return INITIAL_STATE; // or you can just return 0

    // if action.type doesn't hook above, use the default case
    default:
      return state;
  }
};
