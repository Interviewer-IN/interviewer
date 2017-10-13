import {combineReducers} from 'redux';
import notifications from './notifications';
import project from './project';
import sideBar from './sideBar';
import authentication from './authentication';
import vacancies from './vacancies';
import levels from './levels';
import positions from './positions';
import candidates from './candidates';


export default combineReducers({
    project,
    notifications,
    sideBar,
    authentication,
    vacancies,
    levels,
    positions,
    candidates

})