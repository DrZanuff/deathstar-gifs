import { useCallback } from 'react'
import { filter } from 'lodash/fp'
import { useRecoilValue, useSetRecoilState, useRecoilState } from 'recoil'
import { toast } from 'react-hot-toast'
import {
  currentGif,
  modalIsOpenState,
  currentEditDescription,
  currentEditTitle,
  modalEditMode,
  favoritesState
} from '../../../../atoms'
import { TextField, Stack, IconButton, Button } from '@mui/material'
import { Share } from '@mui/icons-material'
import type { Gif } from '../../../../api/types'
import * as S from './styles'

export function Form() {
  const gif = useRecoilValue(currentGif)
  const editMode = useRecoilValue(modalEditMode)
  const setIsModalOpen = useSetRecoilState(modalIsOpenState)
  const [favorites, setFavorites] = useRecoilState(favoritesState)
  const [title, setTitle] = useRecoilState(currentEditTitle)
  const [description, setDescription] = useRecoilState(currentEditDescription)

  const handleCloseClick = useCallback(() => {
    setIsModalOpen(false)
  }, [])

  const handleSaveClick = useCallback(() => {
    const filterdGifs = {
      ...favorites,
      [gif.id]: { ...gif, title: title, description: description }
    }
    setFavorites(filterdGifs)
    localStorage.setItem('favorites', JSON.stringify(filterdGifs))
    setIsModalOpen(false)
    toast.success('GIF saved!')
  }, [gif, title, description, favorites])

  const handleDeleteClick = useCallback(() => {
    const filterdGifs = Object.entries(favorites).filter((favorite) => {
      if (favorite[0] !== gif.id) {
        return favorite
      }
    })

    const newFavorites = filterdGifs.reduce(
      (newObject, value) => ({ ...newObject, [value[0]]: value[1] }),
      {} as Record<string, Gif>
    )
    localStorage.setItem('favorites', JSON.stringify(newFavorites))
    setFavorites(newFavorites)
    setIsModalOpen(false)
    toast.success('GIF Deleted!')
  }, [gif, favorites])

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(gif.images.original.webp)
    toast.success('GIF URL copied!')
  }, [gif])

  return (
    <S.FieldsContainer>
      <Stack direction="row" spacing={1} sx={{ width: '100%' }}>
        <TextField
          size="small"
          label="Title"
          color="error"
          sx={{ width: '100%' }}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <IconButton color="error" onClick={handleCopy}>
          <Share />
        </IconButton>
      </Stack>
      <TextField
        label="Description"
        multiline
        rows={5}
        size="small"
        color="error"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Stack
        direction="row"
        sx={{ width: '100%', justifyContent: 'space-between' }}
      >
        <Button
          variant="outlined"
          size="small"
          color="error"
          disabled={editMode === 'save'}
          onClick={handleDeleteClick}
        >
          Delete
        </Button>

        <Stack direction="row" spacing={1}>
          <Button
            variant="outlined"
            size="small"
            color="secondary"
            onClick={handleCloseClick}
          >
            Cancel
          </Button>

          <Button
            variant="contained"
            size="small"
            disabled={title === '' || description === ''}
            onClick={handleSaveClick}
          >
            Save
          </Button>
        </Stack>
      </Stack>
    </S.FieldsContainer>
  )
}
