import { ScrollBars } from '../../styles/scrollBars'
import styled from 'styled-components'

export const InfiniteScrollContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-height: calc(100vh - 150px);

  > .MuiBox-root {
    ${ScrollBars}
  }
`
