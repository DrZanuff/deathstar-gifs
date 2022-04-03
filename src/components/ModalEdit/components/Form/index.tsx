import { useCallback } from 'react'
import { useRecoilValue, useSetRecoilState, useRecoilState } from 'recoil'
import {
  currentGif,
  modalEditState,
  currentEditDescription,
  currentEditTitle
} from '../../../../atoms'
import { TextField, Stack, IconButton, Button } from '@mui/material'
import { Share } from '@mui/icons-material'
import * as S from './styles'

export function Form() {
  const gif = useRecoilValue(currentGif)
  const setIsModalOpen = useSetRecoilState(modalEditState)
  const [title, setTitle] = useRecoilState(currentEditTitle)
  const [description, setDescription] = useRecoilState(currentEditDescription)

  const handleCloseClick = useCallback(() => {
    setIsModalOpen(false)
  }, [])

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
        <IconButton color="error">
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
        <Button variant="outlined" size="small" color="error">
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

          <Button variant="contained" size="small">
            Save
          </Button>
        </Stack>
      </Stack>
    </S.FieldsContainer>
  )
}
