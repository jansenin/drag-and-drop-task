import { combineReducers } from "redux"
import { figures } from "./figures"
import { nextFigureId } from "./nextFigureId"
import { nextZIndex } from "./nextZIndex"
import { selectedFigureId } from "./selectedFigureId"

export const rootReducer = combineReducers({ figures, nextFigureId, nextZIndex, selectedFigureId })