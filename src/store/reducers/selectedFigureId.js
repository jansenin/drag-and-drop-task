import { initialState } from "../initialState";
import { SELECT_FIGURE } from "../actions/actionTypes";

export function selectedFigureId(state = initialState.selectedFigureId, action) {
    if (action.type === SELECT_FIGURE) return action.payload.id
    return state
}