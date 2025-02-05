import { legacy_createStore as createStore } from "redux";
import { combineReducers } from "redux";
import { authReducer } from './reducers/authReducer';
import { adminReducer } from "./reducers/adminReducer";
import { quizReducer } from "./reducers/quizReducer";
import { navReducer } from "./reducers/navReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    adminRedu: adminReducer,
    quizRedu: quizReducer,
    navRedu: navReducer, 
});

const store = createStore(rootReducer);
export default store;
