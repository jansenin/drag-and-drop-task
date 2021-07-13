import * as actionTypes from "./actionTypes"

export function createFigure(payload) {
    return {
        type: actionTypes.CREATE_FIGURE,
        payload
    }
}