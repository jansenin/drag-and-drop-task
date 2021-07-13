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

export function deleteFigure(id) {
    return {
        type: actionTypes.DELETE_FIGURE,
        payload: {
            id
        }
    }
}