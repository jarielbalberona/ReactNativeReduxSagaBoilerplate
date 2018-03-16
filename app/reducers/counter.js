import { incrementCounter, decrementCounter } from "../actions";

import {
    INCREMENT_COUNTER,
    DECREMENT_COUNTER,
    LOGOUT
} from "../constants";

const initialState = { counter: 0, counterString: "1" };

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return {
                ...state,
                counter: state.counter + 1,
                counterString: state.counterString + "2"
            };

        case DECREMENT_COUNTER:
            return { ...state, counter: state.counter - 1 };

        case LOGOUT:
            return { ...initialState };

        default:
            return state;
    }
};

export default counterReducer;
