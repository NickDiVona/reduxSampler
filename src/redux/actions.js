export const incrementCount = () => {
  return {
    type: 'INCREMENT_COUNT'
  };
};

export const resetCount = () => {
  return {
    type: 'RESET_COUNT'
  };
};

export const toggleColor = color => {
  return {
    type: 'TOGGLE_COLOR',
    payload: color
  };
};

export const resetColor = () => {
  return {
    type: 'RESET_COLOR'
  };
};
