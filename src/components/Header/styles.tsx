import styled from 'styled-components'

export const HeadnerContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 15px;
`
export const HeaderTitleContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 5px;

  h1 {
    font-family: StarJedi;
    word-spacing: 8px;
    letter-spacing: 4px;
    /* font-weight: 300; */
    color: ${({ theme }) => theme.colors.WHITE};
  }

  h2 {
    font-family: Roboto;
    color: ${({ theme }) => theme.colors.WHITE};
  }
`
