import styled from "styled-components";
import { typeToImage } from "./creationData/imageTypeData"

const Positioner = styled.div`
        position: absolute;
        top: ${props => props.y}px;
        left: ${props => props.x}px;
    `

export function FigureInstance(props) {
    const FigureImage = typeToImage[props.imageType]

    return (
        <Positioner x={props.x} y={props.y}>
            <FigureImage draggable={props.draggable}></FigureImage>
        </Positioner>
    )
}