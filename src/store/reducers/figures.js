import { initialState } from "../initialState";
import { CREATE_FIGURE } from "../actions/actionTypes";

export function figures(state = initialState.figures, action) {
    if (action.type === CREATE_FIGURE) {
        return [
            ...state,
            action.payload
        ]
    }
    return state
}