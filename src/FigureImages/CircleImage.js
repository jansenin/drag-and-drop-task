import styled from "styled-components";

function CircleImage() {
    const Circle = styled.div`
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 1px solid black;
        background: blue;
    `

    return (
        <Circle></Circle>
    )
}

export { CircleImage }