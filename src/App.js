import styled from 'styled-components'
import { CreationSection } from './CreationSection';
import { CanvasSection } from './CanvasSection';

export function App() {
    const AppContainer = styled.div`
        width: 100vw;
        height: 100vh;
        padding: 10px;
        box-sizing: border-box;
    `

    const Grid = styled.div`
        display: grid;
        grid-template-rows: min-content 1fr;
        grid-template-columns: min-content 1fr;
        border-top: 1px solid black;
        border-left: 1px solid black;
        height: 100%;
    `

    const GridCell = styled.div`
        border-bottom: 1px solid black;
        border-right: 1px solid black;
    `

    const ColumnHeader = styled(GridCell)`
        padding: 10px;
        text-align: center;
    `

    return (
        <AppContainer>
            <Grid>
                <ColumnHeader>Figures</ColumnHeader>
                <ColumnHeader>Canvas</ColumnHeader>
                <GridCell>
                    <CreationSection></CreationSection>
                </GridCell>
                <GridCell>
                    <CanvasSection></CanvasSection>
                </GridCell>
            </Grid>
        </AppContainer>
    );
}
