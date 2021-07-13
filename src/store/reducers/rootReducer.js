import { combineReducers } from "redux"
import { figures } from "./figures"
import { nextFigureId } from "./nextFigureId"

export const rootReducer = combineReducers({ figures, nextFigureId })