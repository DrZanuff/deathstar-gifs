import styled from 'styled-components'

export const HeadnerContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  padding-top: 10px;
  align-items: center;
`
export const HeaderTitleContainer = styled.div`
  display: flex;
  flex: 0.9;
  flex-direction: column;
  height: 100%;
  gap: 10px;
  align-items: center;
  justify-content: center;

  h1 {
    font-family: StarJedi;
    word-spacing: 0px;
    letter-spacing: 4px;
    font-size: 26px;
    color: ${({ theme }) => theme.colors.WHITE};
    margin: 0;
  }

  h2 {
    font-family: Roboto;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.WHITE};
    font-weight: 300;
    margin: 0;
  }
`
