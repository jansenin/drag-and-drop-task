import styled from "styled-components";
import { CreationSection } from "./CreationSection";
import { CanvasSection } from "./CanvasSection";
import { ImportExportSection } from "./ImportExportSection";
import { Provider } from "react-redux";
import { store } from "./store/store"

const AppContainer = styled.div`
        width: 100vw;
        height: 100vh;
        padding: 10px;
        box-sizing: border-box;
    `

const Grid = styled.div`
        display: grid;
        grid-template-rows: min-content 1fr min-content;
        grid-template-columns: min-content 1fr;
        border-top: 1px solid black;
        border-left: 1px solid black;
        height: 100%;
    `

const GridCell = styled.div`
        border-bottom: 1px solid black;
        border-right: 1px solid black;
    `

const CanvasCell = styled(GridCell)`
    grid-row-start: 2;
    grid-row-end: 4;
    grid-column-start: 2;
    grid-column-end: 3;
`

const ColumnHeader = styled(GridCell)`
        padding: 10px;
        text-align: center;
    `

export function App() {
    return (
        <Provider store={store}>
            <AppContainer>
                <Grid>
                    <ColumnHeader>Figures</ColumnHeader>
                    <ColumnHeader>Canvas</ColumnHeader>
                    <GridCell>
                        <CreationSection></CreationSection>
                    </GridCell>
                    <GridCell>
                        <ImportExportSection></ImportExportSection>
                    </GridCell>
                    <CanvasCell>
                        <CanvasSection></CanvasSection>
                    </CanvasCell>
                </Grid>
            </AppContainer>
        </Provider>
    );
}
