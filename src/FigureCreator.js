import { useRef } from "react"
import { cssAndPhysicalPixelRatio } from "./utils/utils"
import { ImageDragDataHelper, ImageDragTypeHelper } from "./utils/figureDragUtils";

export function FigureCreator(props) {
    const imageRef = useRef();
    const onDragStart = (e) => {
        const dragType = ImageDragTypeHelper.createFigureDragType(e.nativeEvent.offsetX, e.nativeEvent.offsetY)
        const dragData = ImageDragDataHelper.createData(props.image.imageType)
        e.dataTransfer.setData(dragType, dragData)

        const k = cssAndPhysicalPixelRatio();
        const [imageOffsetX, imageOffsetY] = [e.nativeEvent.offsetX * k, e.nativeEvent.offsetY * k]
        e.dataTransfer.setDragImage(imageRef.current, imageOffsetX, imageOffsetY)
    }

    const Image = props.image
    const draggable = true;
    return (
        <Image draggable={draggable} onDragStart={draggable && onDragStart} forwardRef={imageRef}></Image>
    )
}