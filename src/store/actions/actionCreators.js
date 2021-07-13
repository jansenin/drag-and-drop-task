import * as actionTypes from "./actionTypes"

export function createFigure(payload) {
    return {
        type: actionTypes.CREATE_FIGURE,
        payload
    }
}

export function selectFigure(id, newZIndex) {
    return {
        type: actionTypes.SELECT_FIGURE,
        payload: {
            id,
            newZIndex
        }
    }
}