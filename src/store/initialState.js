import { AllDataItemName } from "../DataSaver"

let dataFromStorage = localStorage.getItem(AllDataItemName)
export const initialState = dataFromStorage !== null ? JSON.parse(dataFromStorage) : {
    figures: [],
    nextFigureId: 0,
    nextZIndex: 0,
    selectedFigureId: null
}

/*
Example

export const initialState = {
    figures: [
        {
            imageType: "...",
            x: 100,
            y: 100,
            id: 1,
            zIndex: 0
        }
    ],
    nextFigureId: 2,
    nextZIndex: 2,
    selectedFigureId: 1
}
*/