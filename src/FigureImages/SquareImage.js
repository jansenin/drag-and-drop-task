import styled from "styled-components";
import { Select } from "./Select"
import { useSelector, useDispatch } from "react-redux";
import { selectFigure } from "../store/actions/actionCreators";

const Square = styled.div`
        width: 100px;
        height: 100px;
        border: 1px solid black;
        background: green;
    `

function SquareImage(props) {
    const nextZIndex = useSelector(state => state.nextZIndex)
    const dispatch = useDispatch()

    const onClick = e => {
        dispatch(selectFigure(props.id, nextZIndex))
    }

    return (
        <Select selected={props.selected}>
            <Square
                draggable={props.draggable}
                onDragStart={props.onDragStart}
                onClick={props.selectable && onClick}
                ref={props.forwardRef}>
            </Square>
        </Select>
    )
}

SquareImage.imageType = "SquareImage"
SquareImage.imageWidth = 100
SquareImage.imageHeight = 100

export { SquareImage }