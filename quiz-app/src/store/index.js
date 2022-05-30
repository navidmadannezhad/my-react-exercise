import { createStore } from 'redux';
import rootReducer from "../reducer/index";

console.log(rootReducer);
const store = createStore(rootReducer);

export default store;