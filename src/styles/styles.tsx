import styled from 'styled-components'

interface BackgroundProps {
  isMobile: boolean
}

export const Background = styled.div<BackgroundProps>`
  display: ${({ isMobile }) => (isMobile === true ? 'none' : 'initial')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background-color: #0a0722;

  @media (max-width: 900px) {
    display: ${({ isMobile }) => (isMobile === true ? 'initial' : 'none')};
  }

  > img {
    opacity: 0.2;
    width: 100%;
    object-fit: cover;
  }
`

export const Body = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  max-width: 1000px;
  z-index: 1;
  /* border: 1px solid red; */
`
