import { legacy_createStore as createStore } from "redux";
import { combineReducers } from "redux";
import { authReducer } from "./reducers/authReducer";
import { adminReducer } from "./reducers/adminReducer";
import { quizReducer } from "./reducers/quizReducer";
import { navReducer } from "./reducers/navReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
    auth: authReducer,
    adminRedu: adminReducer,
    quizRedu: quizReducer,
    navRedu: navReducer, // Ensuring consistency with 'navRedu'
});

const store = createStore(rootReducer, composeWithDevTools());
export default store;
