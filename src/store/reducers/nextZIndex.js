import { initialState } from "../initialState";
import { SELECT_FIGURE } from "../actions/actionTypes";

export function nextZIndex(state = initialState.nextZIndex, action) {
    if (action.type === SELECT_FIGURE) return state + 1
    return state
}