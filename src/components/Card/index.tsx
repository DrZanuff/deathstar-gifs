import { memo, useCallback } from 'react'
import { useSetRecoilState } from 'recoil'
import {
  currentGif,
  modalEditState,
  currentEditDescription,
  currentEditTitle
} from '../../atoms'
import { ImageListItem, ImageListItemBar, IconButton } from '@mui/material'
import { FavoriteBorder } from '@mui/icons-material'
import type { Gif } from '../../api/types'
import * as S from './styles'

interface CardProps {
  renderIcon: boolean
  gif: Gif
}

function Card({ gif, renderIcon }: CardProps) {
  const setCurrentGif = useSetRecoilState(currentGif)
  const setModalOpen = useSetRecoilState(modalEditState)
  const setCurrentEditTitle = useSetRecoilState(currentEditTitle)
  const setCurrentEditDescription = useSetRecoilState(currentEditDescription)

  const handleCardClick = useCallback(() => {
    setCurrentGif(gif)
    setCurrentEditTitle(gif.title)
    setCurrentEditDescription(gif.description ? gif.description : '')
    setModalOpen(true)
  }, [])

  return (
    <S.CardContainer
      height={Number(gif.images.fixed_width.height)}
      onClick={handleCardClick}
    >
      <ImageListItem>
        <img src={gif.images.fixed_width.url} alt={gif.title} />
        <ImageListItemBar
          title={gif.title}
          subtitle={gif.username}
          actionIcon={
            renderIcon === true ? (
              <IconButton
                aria-label={`favorite ${gif.title}`}
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
