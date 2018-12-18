import { createStore } from "redux";
import Reducer from "../reducers/reducer";

export default () => {
    const store = createStore(Reducer);
    return store;
}