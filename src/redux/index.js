// import langReducer from "./langReducer";
import uiReducer from "./uiReducer";
import userReducer from './userReducers';
// import cateState from './categoryReducer';
import { combineReducers } from "redux";
import itemEditing from './itemEditing'
import listVouchers from './listVouchers'
// import search from './search'
// import filterTable from './filterTable'
// import sort from './sort'

const rootReducer = combineReducers({listVouchers,  uiReducer, userReducer, itemEditing });

export default rootReducer;
