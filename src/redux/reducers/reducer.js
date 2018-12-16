
export default (state = [], action) => {
        switch(action.type) {
           case "GET_STATE": 
           return state;
           break;

           default: 
           return state;
           break;
        }
}