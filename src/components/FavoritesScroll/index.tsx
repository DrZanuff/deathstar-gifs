import { Box } from '@mui/material'
import { Masonry } from '@mui/lab'
import Card from '../Card'

import { useRecoilValue } from 'recoil'
import { favoritesState } from '../../atoms'

import * as S from './styles'

export function FavoriteScroll() {
  const favorites = useRecoilValue(favoritesState)

  return (
    <S.FavoritesScrollContainer>
      <Box
        sx={{
          width: [220, 440, 650, 800, 1200],
          height: '100%',
          bottom: '0px',
          overflowY: 'auto',
          overflowX: 'hidden'
        }}
      >
        <Masonry columns={4} spacing={2}>
          {Object.values(favorites).map((gif) => (
            <Card key={gif.id} gif={gif} editMode />
          ))}
        </Masonry>
      </Box>
    </S.FavoritesScrollContainer>
  )
}
