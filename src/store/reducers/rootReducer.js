import { combineReducers } from "redux"
import { figures } from "./figures"
import { nextFigureId } from "./nextFigureId"
import { nextZIndex } from "./nextZIndex"
import { selectedFigureId } from "./selectedFigureId"
import { SET_STATE } from "../actions/actionTypes"

const appReducer = combineReducers({ figures, nextFigureId, nextZIndex, selectedFigureId })

export const rootReducer = (state, action) => {
    if (action.type === SET_STATE) {
        return appReducer(action.payload.newState, action)
    } else return appReducer(state, action)
}