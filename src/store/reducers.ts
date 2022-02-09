import { combineReducers } from 'redux';

import starships from './starships/slice';

const rootReducer = combineReducers({
  starships,
});

export default rootReducer;
