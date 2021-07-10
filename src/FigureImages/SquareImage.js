import styled from "styled-components";

function SquareImage() {
    const Square = styled.div`
        width: 100px;
        height: 100px;
        border: 1px solid black;
        background: green;
    `

    return (
        <Square></Square>
    )
}

export { SquareImage }