import styled from 'styled-components'

export const ModalEditBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #313131a6;
  backdrop-filter: blur(5px);

  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  position: relative;
`

export const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  max-width: 400px;
  margin: auto;

  span {
    width: 100%;
    text-align: center;
    font-family: Roboto;
    font-weight: 300;

    color: ${({ theme }) => theme.colors.BG_DARK};
  }

  img {
    object-fit: contain;
    max-width: 260px;
    border-radius: 5px;
    max-height: calc(70vh - 50px);
    z-index: 2;
  }
`
export const ProgressContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;

  justify-content: center;
  align-items: center;

  z-index: 1;
`
