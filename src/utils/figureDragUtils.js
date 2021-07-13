import { isNumber } from "./utils"

export class ImageDragTypeHelper {
    static #FIGURE_DRAG_TYPE = "FIGURE_DRAG_TYPE"

    constructor(typeString) {
        this.isImageType = true
        const arr = typeString.split(",")

        const isNum = index => isNumber(arr[index])

        if (arr.length !== 5 && arr[0] === this.#FIGURE_DRAG_TYPE && isNum(1) && isNum(2) && isNum(3) && isNum(4)) {
            this.isImageType = false
            return
        }
        this.offsetX = +arr[1]
        this.offsetY = +arr[2]
        this.width = +arr[3]
        this.height = +arr[4]
    }

    static createFigureDragType(offsetX, offsetY, width, height) {
        return this.#FIGURE_DRAG_TYPE + "," + offsetX + "," + offsetY + "," + width + "," + height
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