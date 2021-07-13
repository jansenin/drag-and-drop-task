import styled from "styled-components"

const selectionColor = "red"

export const Select = styled.div`
    ${props => props.selected ? `
        border: 1px solid ${selectionColor};
        background: ${selectionColor}
    ` : ""}
`