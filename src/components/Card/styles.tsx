import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  width: 200px;
  min-width: 100px;
  max-width: 200px;

  cursor: pointer;

  img {
    transition: filter 0.2s ease-in-out;
  }

  &:hover {
    img {
      filter: brightness(0.5);
    }
  }
`
