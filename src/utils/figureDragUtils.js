import { isNumber } from "./utils"

export class ImageDragTypeHelper {
    static #FIGURE_DRAG_TYPE = "FIGURE_DRAG_TYPE"

    constructor(typeString) {
        this.isImageType = true
        const arr = typeString.split(",")
        if (arr.length !== 3 && arr[0] === this.#FIGURE_DRAG_TYPE && isNumber(arr[1]) && isNumber(arr[2])) {
            this.isImageType = false
            return
        }
        this.offsetX = +arr[1]
        this.offsetY = +arr[2]
    }

    static createFigureDragType(offsetX, offsetY) {
        return this.#FIGURE_DRAG_TYPE + "," + offsetX + "," + offsetY
    }
}

export class ImageDragDataHelper {
    constructor(dataString) {
        let figure = null;
        this.isImageData = true
        try {
            figure = JSON.parse(dataString)
        } catch (e) {
            this.isImageData = false;
        }
        this.isImageData &= figure.imageType !== undefined
        this.data = figure
    }

    static createData(imageType) {
        return JSON.stringify({
            imageType
        })
    }
}