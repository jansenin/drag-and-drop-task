import styled from "styled-components";

const Circle = styled.div`
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 1px solid black;
        background: blue;
    `

function CircleImage(props) {
    return (
        <Circle draggable={props.draggable} onDragStart={props.onDragStart} ref={props.forwardRef}></Circle>
    )
}

CircleImage.imageType = "CircleImage"

export { CircleImage }