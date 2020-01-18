import NumberReducer from './numberReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  number: NumberReducer
});

export default rootReducer;
