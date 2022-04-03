import { memo } from 'react'
import { ImageListItem, ImageListItemBar, IconButton } from '@mui/material'
import { Favorite, FavoriteBorder } from '@mui/icons-material'
import type { Gif } from '../../api/types'
import * as S from './styles'

interface CardProps extends Gif {
  renderIcon: boolean
}

function Card({ username, title, images, renderIcon }: CardProps) {
  return (
    <S.CardContainer height={Number(images.fixed_width.height)}>
      <ImageListItem>
        <img src={images.fixed_width.url} alt={title} />
        <ImageListItemBar
          title={title}
          subtitle={username}
          actionIcon={
            renderIcon === true ? (
              <IconButton
                aria-label={`favorite ${title}`}
                sx={{ color: '#F44336' }}
              >
                <FavoriteBorder />
              </IconButton>
            ) : (
              <></>
            )
          }
        />
      </ImageListItem>
    </S.CardContainer>
  )
}

export default memo(Card)
