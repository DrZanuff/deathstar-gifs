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
          width: [390, 440, 650, 800, 1000],
          height: '100%',
          bottom: '0px',
          overflowY: 'auto',
          overflowX: 'hidden'
        }}
      >
        <Masonry
          columns={[3, 3, 3, 4, 5]}
          spacing={2}
          sx={{ alignContent: 'flex-start' }}
        >
          {Object.values(favorites).map((gif) => (
            <Card key={gif.id} gif={gif} editMode />
          ))}
        </Masonry>
      </Box>
    </S.FavoritesScrollContainer>
  )
}
