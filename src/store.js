import { createStore } from "redux";
import rootReducers from "./state/reducers/index";

const store = createStore(rootReducers);
export default store;