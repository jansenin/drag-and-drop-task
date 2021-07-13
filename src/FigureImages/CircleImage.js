import styled from "styled-components";
import { Select } from "./Select"
import { useSelector, useDispatch } from "react-redux";
import { selectFigure } from "../store/actions/actionCreators";

const Circle = styled.div`
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 1px solid black;
        background: blue;
    `

function CircleImage(props) {
    const nextZIndex = useSelector(state => state.nextZIndex)
    const dispatch = useDispatch()

    const onClick = e => {
        dispatch(selectFigure(props.id, nextZIndex))
    }

    return (
        <Select selected={props.selected}>
            <Circle
                draggable={props.draggable}
                onDragStart={props.onDragStart}
                onClick={props.selectable && onClick}
                ref={props.forwardRef}>
            </Circle>
        </Select>
    )
}

CircleImage.imageType = "CircleImage"

export { CircleImage }