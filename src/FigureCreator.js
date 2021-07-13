import { useRef } from "react"
import { cssAndPhysicalPixelRatio } from "./utils/utils"
import { ImageDragDataHelper, ImageDragTypeHelper } from "./utils/figureDragUtils";

export function FigureCreator(props) {
    const imageRef = useRef();
    const Image = props.image

    const onDragStart = (e) => {
        const width = Image.imageWidth
        const height = Image.imageHeight

        const dragType = ImageDragTypeHelper.createFigureDragType(e.nativeEvent.offsetX, e.nativeEvent.offsetY, width, height)
        const dragData = ImageDragDataHelper.createData(props.image.imageType)
        e.dataTransfer.setData(dragType, dragData)

        const k = cssAndPhysicalPixelRatio();
        const [imageOffsetX, imageOffsetY] = [e.nativeEvent.offsetX * k, e.nativeEvent.offsetY * k]
        e.dataTransfer.setDragImage(imageRef.current, imageOffsetX, imageOffsetY)
    }

    const draggable = true;
    return (
        <Image draggable={draggable} onDragStart={draggable && onDragStart} ref={imageRef}></Image>
    )
}