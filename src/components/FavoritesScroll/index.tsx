import { Box } from '@mui/material'
import * as S from './styles'

export function FavoriteScroll() {
  return (
    <S.FavoritesScrollContainer>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          bottom: '0px',
          border: '1px solid blue',
          overflowY: 'auto'
        }}
      >
        Favorites
      </Box>
    </S.FavoritesScrollContainer>
  )
}