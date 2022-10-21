import { combineReducers } from 'redux';

import header from './header';
import main from './main';

export default combineReducers({ header: header, main: main });
