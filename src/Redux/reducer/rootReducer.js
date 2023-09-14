import { combineReducers } from 'redux';
import shopReducer from './shopReducer';

const rootReducer = combineReducers({
  data: shopReducer    
});

export default rootReducer;