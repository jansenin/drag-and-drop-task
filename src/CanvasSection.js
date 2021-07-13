import { useDispatch, useSelector } from "react-redux"
import { useRef } from "react"
import { createFigure } from "./store/actions/actionCreators"
import styled from "styled-components"
import { FigureInstance } from "./FigureInstance"
import { ImageDragDataHelper, ImageDragTypeHelper } from "./utils/figureDragUtils"

const Canvas = styled.div`
        height: 100%;
        position: relative;
    `

export function CanvasSection() {
    const dispatch = useDispatch()
    const canvasRef = useRef();
    const nextFigureId = useSelector(state => state.nextFigureId)
    const figures = useSelector(state => state.figures)
    const selectedFigureId = useSelector(state => state.selectedFigureId)

    const onDrop = (e) => {
        for (let type of e.dataTransfer.types) {
            const imageDragTypeHelper = new ImageDragTypeHelper(type)
            if (imageDragTypeHelper.isImageType) {

                const imageDragDataHelper = new ImageDragDataHelper(e.dataTransfer.getData(type))
                const figure = imageDragDataHelper.data
                const canvasRect = canvasRef.current.getBoundingClientRect();
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

    const onDragOver = e => {
        for (let type of e.dataTransfer.types) {
            const imageDragTypeHelper = new ImageDragTypeHelper(type)
            if (imageDragTypeHelper.isImageType) {
                const canvasRect = canvasRef.current.getBoundingClientRect();
                const x = (e.nativeEvent.clientX - canvasRect.left) - imageDragTypeHelper.offsetX
                const y = (e.nativeEvent.clientY - canvasRect.top) - imageDragTypeHelper.offsetY
                if (x >= 0 && y >= 0 && x <= canvasRect.width && y <= canvasRect.height)
                    e.preventDefault()
                return
            }
        }
    }

    const onDragEnter = onDragOver

    return (
        <Canvas onDrop={onDrop} onDragOver={onDragOver} onDragEnter={onDragEnter} ref={canvasRef}>
            {figures.map(
                figure => <FigureInstance
                    draggable="false"
                    key={figure.id}
                    selected={figure.id === selectedFigureId}
                    id={figure.id}
                    x={figure.x}
                    y={figure.y}
                    imageType={figure.imageType}>
                </FigureInstance>
            )}
        </Canvas>
    )
}