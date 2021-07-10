import styled from "styled-components";

export function FigureInstance(props) {
    const Positioner = styled.div`
        position: absolute;
        top: ${props.y}
        left: ${props.x}
    `

    return (
        <Positioner>
            {/*...*/}
        </Positioner>
    )
}