import styled from 'styled-components'

export const SearchBarContainer = styled.div`
  display: flex;
  width: 100%;
  flex: 1.2;
  height: 50px;

  @media (max-width: 1024px) {
    max-height: 55px;
    width: 95%;

    svg {
      height: 20px;
      width: 20px;
    }
  }
`
