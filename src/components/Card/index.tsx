import { memo, useCallback } from 'react'
import { useSetRecoilState } from 'recoil'
import {
  currentGif,
  modalIsOpenState,
  currentEditDescription,
  currentEditTitle,
  modalEditMode
} from '../../atoms'
import { ImageListItem, ImageListItemBar, IconButton } from '@mui/material'
import { FavoriteBorder } from '@mui/icons-material'
import type { Gif } from '../../api/types'
import * as S from './styles'

interface CardProps {
  editMode: boolean
  gif: Gif
}

function Card({ gif, editMode }: CardProps) {
  const setCurrentGif = useSetRecoilState(currentGif)
  const setModalOpen = useSetRecoilState(modalIsOpenState)
  const setCurrentEditTitle = useSetRecoilState(currentEditTitle)
  const setCurrentEditDescription = useSetRecoilState(currentEditDescription)
  const setModalEditMode = useSetRecoilState(modalEditMode)

  const handleCardClick = useCallback(() => {
    setCurrentGif(gif)
    setCurrentEditTitle(gif.title)
    setCurrentEditDescription(gif.description ? gif.description : '')
    setModalEditMode(editMode === true ? 'edit' : 'save')
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
            editMode === true ? (
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
