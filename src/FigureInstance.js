import styled from "styled-components";
import { typeToImage } from "./creationData/imageTypeData"
import { Select } from "./Select"
import { useSelector, useDispatch } from "react-redux";
import { selectFigure } from "./store/actions/actionCreators";

const Positioner = styled.div`
        position: absolute;
        top: ${props => props.$y}px;
        left: ${props => props.$x}px;
    `

export function FigureInstance(props) {
    const nextZIndex = useSelector(state => state.nextZIndex)
    const dispatch = useDispatch()
    const FigureImage = typeToImage[props.imageType]

    const onClick = e => {
        dispatch(selectFigure(props.id, nextZIndex))
    }

    const selectable = true
    return (
        <Positioner $x={props.x} $y={props.y}>
            <Select selected={selectable && props.selected}>
                <FigureImage draggable={props.draggable} onClick={selectable && onClick} onDragStart={props.draggable && props.onDragStart} ref={props.forwardRef}></FigureImage>
            </Select>
        </Positioner>
    )
}