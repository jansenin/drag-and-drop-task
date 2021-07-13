import { initialState } from "../initialState";
import { CREATE_FIGURE, SELECT_FIGURE } from "../actions/actionTypes";

export function figures(state = initialState.figures, action) {
    if (action.type === CREATE_FIGURE) {
        return [
            ...state,
            action.payload
        ]
    } else if (action.type === SELECT_FIGURE) {
        const selectedFigure = state.find(figure => figure.id === action.payload.id)
        const selectedFigureCopy = Object.assign({}, selectedFigure)
        selectedFigureCopy.zIndex = action.payload.newZIndex

        const restFigures = state.filter(figure => figure.id !== action.payload.id)
        return [
            ...restFigures,
            selectedFigureCopy
        ]
    }
    return state
}