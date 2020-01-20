import NumberReducer from './numberReducer';
import ColorReducer from './colorReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  number: NumberReducer,
  color: ColorReducer
});

export default rootReducer;
