import { css } from 'styled-components'

export const ScrollBars = css`
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.BG_DARK};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.BG_LIGHT};

    &:hover {
      background-color: ${({ theme }) => theme.colors.RED};
    }
  }
`
