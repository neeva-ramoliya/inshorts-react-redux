import defaultState from "../../data";

export default (state = defaultState, action) => {
        switch(action.type) {
           case "GET_NEWS": 
           return state;
           break;

           default: 
           return state;
           break;
        }
}