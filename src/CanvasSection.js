import { useDispatch, useSelector } from "react-redux"
import { useRef } from "react"
import { createFigure, deleteFigure } from "./store/actions/actionCreators"
import styled from "styled-components"
import { FigureInstance } from "./FigureInstance"
import { ImageDragDataHelper, ImageDragTypeHelper } from "./utils/figureDragUtils"
import { typeToImage } from "./creationData/imageTypeData"
import { cssAndPhysicalPixelRatio } from "./utils/utils"

const Canvas = styled.div`
        height: 100%;
        position: relative;
    `

export function CanvasSection() {
    const dispatch = useDispatch()
    const canvasRef = useRef()
    const nextFigureId = useSelector(state => state.nextFigureId)
    const figures = useSelector(state => state.figures)
    const selectedFigureId = useSelector(state => state.selectedFigureId)

    const canvasOnDrop = (e) => {
        for (let type of e.dataTransfer.types) {
            const imageDragTypeHelper = new ImageDragTypeHelper(type)
            if (imageDragTypeHelper.isImageType) {

                const imageDragDataHelper = new ImageDragDataHelper(e.dataTransfer.getData(type))
                const figure = imageDragDataHelper.data
                const canvasRect = canvasRef.current.getBoundingClientRect()
                dispatch(createFigure({
                    imageType: figure.imageType,
                    x: (e.nativeEvent.clientX - canvasRect.left) - imageDragTypeHelper.offsetX,
                    y: (e.nativeEvent.clientY - canvasRect.top) - imageDragTypeHelper.offsetY,
                    id: nextFigureId
                }))

                return
            }
        }
    }

    const canvasOnDragOver = e => {
        for (let type of e.dataTransfer.types) {
            const imageDragTypeHelper = new ImageDragTypeHelper(type)
            if (imageDragTypeHelper.isImageType) {
                const canvasRect = canvasRef.current.getBoundingClientRect()
                const x = (e.nativeEvent.clientX - canvasRect.left) - imageDragTypeHelper.offsetX
                const y = (e.nativeEvent.clientY - canvasRect.top) - imageDragTypeHelper.offsetY
                const maxX = canvasRect.width - imageDragTypeHelper.width
                const maxY = canvasRect.height - imageDragTypeHelper.height
                if (x >= 0 && y >= 0 && x <= maxX && y <= maxY)
                    e.preventDefault()
                return
            }
        }
    }

    const canvasOnDragEnter = canvasOnDragOver

    const figureOnDragStart = (id, imageType) => (e) => {
        const Image = typeToImage[imageType]
        const width = Image.imageWidth
        const height = Image.imageHeight

        const dragType = ImageDragTypeHelper.createFigureDragType(e.nativeEvent.offsetX, e.nativeEvent.offsetY, width, height)
        const dragData = ImageDragDataHelper.createData(imageType, selectedFigureId === id)
        e.dataTransfer.setData(dragType, dragData)

        const k = cssAndPhysicalPixelRatio();
        const [imageOffsetX, imageOffsetY] = [e.nativeEvent.offsetX * k, e.nativeEvent.offsetY * k]
        e.dataTransfer.setDragImage(e.target, imageOffsetX, imageOffsetY)
        setTimeout(() => dispatch(deleteFigure(id)), 0)
    }

    return (
        <Canvas onDrop={canvasOnDrop} onDragOver={canvasOnDragOver} onDragEnter={canvasOnDragEnter} ref={canvasRef}>
            {figures.map(
                figure => <FigureInstance
                    draggable="true"
                    key={figure.id}
                    selected={figure.id === selectedFigureId}
                    id={figure.id}
                    x={figure.x}
                    y={figure.y}
                    imageType={figure.imageType}
                    onDragStart={figureOnDragStart(figure.id, figure.imageType)}>
                </FigureInstance>
            )}
        </Canvas>
    )
}