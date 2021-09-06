import { SHOW_DATA, } from "./action"

const intialState = {
    fetchData: [],
    
};

export const Animal = (state = intialState, action) => {
    switch (action.type) {

        case SHOW_DATA:
            return {
                ...state,
                fetchData: action.payload
            };

        default:
            return state;
    }
};




