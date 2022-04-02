import { Card, TextField, Button } from '@mui/material'
import { Search } from '@mui/icons-material'
import * as S from './styles'

export function SearchBar() {
  return (
    <S.SearchBarContainer>
      <Card
        sx={{
          width: '100%',
          padding: '2px 8px',
          alignItems: 'center',
          display: 'flex',
          gap: '10px'
        }}
      >
        <TextField
          size="small"
          placeholder="Search..."
          sx={{ width: '100%' }}
        />
        <Button variant="contained" endIcon={<Search />}>
          Find
        </Button>
      </Card>
    </S.SearchBarContainer>
  )
}
