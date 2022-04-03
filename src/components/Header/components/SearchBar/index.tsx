import { useState, useCallback } from 'react'
import { Card, TextField } from '@mui/material'
import { useRecoilState, useSetRecoilState } from 'recoil'
import {
  querySearchOffset,
  currentSearchResults,
  currentSearchText,
  initialSearchData,
  currentPageState
} from '../../../../atoms'
import { getSearch } from '../../../../api'
import { LoadingButton } from '@mui/lab'
import { Search } from '@mui/icons-material'
import * as S from './styles'

export function SearchBar() {
  const setCurrentSearchResults = useSetRecoilState(currentSearchResults)
  const setCurrentPageState = useSetRecoilState(currentPageState)
  const [offset, setOffset] = useRecoilState(querySearchOffset)
  const [searchText, setSearchText] = useState('')
  const setCurrentSearchText = useSetRecoilState(currentSearchText)
  const [isSearching, setIsSearching] = useState(false)

  const handleSearch = useCallback(async () => {
    setIsSearching(true)
    setCurrentSearchResults(initialSearchData)
    const response = await getSearch(searchText, offset)
    setCurrentPageState('search')
    setCurrentSearchResults(response.responseObj)
    setCurrentSearchText(searchText)
    setOffset((prev) => prev + 1)
    setIsSearching(false)
  }, [searchText, offset])

  const handleSearchText = useCallback((text: string) => {
    setSearchText(text)
    setOffset(0)
  }, [])

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
          color="error"
          placeholder="Search..."
          sx={{ width: '100%' }}
          value={searchText}
          onChange={(e) => handleSearchText(e.target.value)}
        />
        <LoadingButton
          variant="contained"
          color="secondary"
          endIcon={<Search />}
          disabled={searchText === ''}
          loading={isSearching}
          onClick={handleSearch}
        >
          Find
        </LoadingButton>
      </Card>
    </S.SearchBarContainer>
  )
}
