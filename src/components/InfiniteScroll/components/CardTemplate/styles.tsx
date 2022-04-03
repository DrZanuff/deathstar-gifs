import styled from 'styled-components'

export const SkeletonBackground = styled.div`
  width: 200px;
  position: relative;
  background-color: ${({ theme }) => theme.colors.BG_OPACITY};
`
export const SpinnerContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
