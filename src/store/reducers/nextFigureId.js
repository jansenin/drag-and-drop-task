import { initialState } from "../initialState";
import { CREATE_FIGURE } from "../actions/actionTypes";

export function nextFigureId(state = initialState.nextFigureId, action) {
    if (action.type === CREATE_FIGURE) return state + 1
    return state
}