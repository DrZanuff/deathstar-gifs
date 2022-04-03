import styled from 'styled-components'

export const HeadnerContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  padding-top: 10px;
  align-items: center;

  > #logo-title {
    display: flex;
    gap: 10px;
    align-items: center;
    width: 100%;
    flex: 0.9;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 8px;
    #logo-title {
      svg {
        height: 90px !important;
        width: 90px !important;
      }
    }
  }
`
export const HeaderTitleContainer = styled.div`
  display: flex;
  /* flex: 0.9; */
  flex-direction: column;
  height: 100%;
  gap: 10px;
  align-items: center;
  justify-content: center;

  h1 {
    font-family: StarJedi;
    word-spacing: 0px;
    letter-spacing: 4px;
    font-size: 24px;
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

  @media (max-width: 1024px) {
    h1 {
      font-size: 22px;
    }

    h2 {
      font-size: 13px;
    }
  }
`
