import styled from "styled-components";
import { CircleImage } from "./FigureImages/CircleImage";
import { SquareImage } from "./FigureImages/SquareImage";
import { FigureCreator } from "./FigureCreator";

function StyledFigureCreator(props) {
    const WithMargins = styled.div`
        margin: 50px;
    `

    return (
        <WithMargins>
            <FigureCreator image={props.image}></FigureCreator>
        </WithMargins>
    )
}

export function CreationSection() {
    return (
        <div>
            <StyledFigureCreator image={CircleImage}></StyledFigureCreator>
            <StyledFigureCreator image={SquareImage}></StyledFigureCreator>
        </div>
    )
}