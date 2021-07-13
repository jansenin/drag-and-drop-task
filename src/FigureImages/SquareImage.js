import styled from "styled-components";

const Square = styled.div`
        width: 100px;
        height: 100px;
        border: 1px solid black;
        background: green;
    `

function SquareImage(props) {
    return (
        <Square draggable={props.draggable} onDragStart={props.onDragStart} ref={props.forwardRef}></Square>
    )
}

SquareImage.imageType = "SquareImage"

export { SquareImage }