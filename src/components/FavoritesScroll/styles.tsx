import { ScrollBars } from '../../styles/scrollBars'
import styled from 'styled-components'

export const FavoritesScrollContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-height: calc(100vh - 150px);

  > .MuiBox-root {
    ${ScrollBars}
  }

  @media (max-width: 1024px) {
    max-height: calc(100vh - 250px);

    > .MuiBox-root {
      margin-top: 10px;
      .MuiMasonry-root {
        align-content: center;
      }
    }
  }
`
