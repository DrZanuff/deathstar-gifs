import { useCallback } from 'react'
import { useRecoilState } from 'recoil'
import { currentPageState } from '../../atoms'
import { Logo } from './components/Logo'
import { SearchBar } from './components/SearchBar'
import { Button } from '@mui/material'
import { Favorite } from '@mui/icons-material'

import * as S from './styles'

export function Header() {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState)

  const handleClickFavorite = useCallback(() => {
    setCurrentPage((prev) => (prev === 'favorites' ? 'search' : 'favorites'))
  }, [])

  return (
    <S.HeadnerContainer>
      <Logo />
      <S.HeaderTitleContainer>
        <h1>Deathstar Gifs</h1>
        <h2>your place for the best Gifs in all the Galaxies</h2>
      </S.HeaderTitleContainer>
      <SearchBar />
      <Button
        color="error"
        size="large"
        variant={currentPage === 'favorites' ? 'contained' : 'outlined'}
        startIcon={<Favorite />}
        onClick={handleClickFavorite}
      >
        Favorites
      </Button>
    </S.HeadnerContainer>
  )
}
