import { Box } from '@mui/material'
import * as S from './styles'

export function InfiniteScroll() {
  return (
    <S.InfiniteScrollContainer>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          bottom: '0px',
          border: '1px solid red',
          overflowY: 'auto'
        }}
      >
        Box
      </Box>
    </S.InfiniteScrollContainer>
  )
}
