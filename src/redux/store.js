import {createStore} from "redux";
import rootReducer from "../redux/action/reducer/index";

const store = createStore(rootReducer);

export default store;