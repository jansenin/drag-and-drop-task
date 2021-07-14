import styled from "styled-components"
import { store } from "./store/store"
import { setState } from "./store/actions/actionCreators"

const Button = styled.div`
    width: 160px;
    border: 1px solid black;
    margin: 9px;
    padding: 10px;
    transition: all 0.3s;

    &:hover {
        cursor: pointer;
        border-radius: 10px;
        background: black;
        color: white;
        border: 1px solid white;
    }
`

const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1px;
`

export const ImportExportSection = () => {
    const onImport = e => {
        navigator.clipboard.readText().then(data => {
            store.dispatch(setState(JSON.parse(data)))
        })
    }

    const onExport = e => {
        navigator.clipboard.writeText(JSON.stringify(store.getState()))
    }

    return (
        <Section>
            <Button onClick={onImport}>Import from clipboard</Button>
            <Button onClick={onExport}>Export to clipboard</Button>
        </Section>
    )
}