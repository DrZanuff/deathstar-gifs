import { ImageListItem, ImageListItemBar, IconButton } from '@mui/material'
import { Favorite, FavoriteBorder } from '@mui/icons-material'
import type { Gif } from '../../api/types'
import * as S from './styles'

export function Card({ username, title, images }: Gif) {
  return (
    <S.CardContainer>
      <ImageListItem>
        <img src={images.fixed_width.url} alt={title} />
        <ImageListItemBar
          title={title}
          subtitle={username}
          actionIcon={
            <IconButton aria-label={`favorite ${title}`}>
              <Favorite />
            </IconButton>
          }
        />
      </ImageListItem>
    </S.CardContainer>
  )
}
