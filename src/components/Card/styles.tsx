import styled from 'styled-components'

interface CardContainerProps {
  height: number
}

export const CardContainer = styled.div<CardContainerProps>`
  display: flex;
  width: 200px;
  min-height: ${({ height }) => height - 20}px;
  min-width: 100px;
  max-width: 200px;
  background-color: ${({ theme }) => theme.colors.BG_OPACITY};

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
