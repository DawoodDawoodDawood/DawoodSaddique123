import {combineReducers} from 'redux';

import Math from './Math';
import TextReducer from './TextReducer';

const rootReducer = combineReducers({
    Math,
    TextReducer
});

export default rootReducer;