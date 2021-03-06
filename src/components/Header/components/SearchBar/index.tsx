import { useState, useCallback } from 'react'
import { Card, TextField } from '@mui/material'
import { toast } from 'react-hot-toast'
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
import { height } from '@mui/system'

export function SearchBar() {
  const setCurrentSearchResults = useSetRecoilState(currentSearchResults)
  const setCurrentPageState = useSetRecoilState(currentPageState)
  const [offset, setOffset] = useRecoilState(querySearchOffset)
  const [searchText, setSearchText] = useState('')
  const setCurrentSearchText = useSetRecoilState(currentSearchText)
  const [isSearching, setIsSearching] = useState(false)

  const setInifiniteScrollToTop = useCallback(() => {
    const $inifiniteScroll = document.querySelector(
      '#inifinite-scroll > .MuiBox-root'
    )
    if ($inifiniteScroll) {
      $inifiniteScroll.scrollTo({ top: 0 })
    }
  }, [])

  const handleSearch = useCallback(async () => {
    setIsSearching(true)
    setCurrentSearchResults(initialSearchData)
    const response = await getSearch(searchText, offset)
    if (response.error) {
      toast.error('Something wrong happened...')
      setIsSearching(false)
      return
    }
    if (response.responseObj.data.length === 0) {
      toast.error('Sorry, could not find results...')
      return
    }
    setCurrentPageState('search')
    setCurrentSearchResults(response.responseObj)
    setInifiniteScrollToTop()
    setCurrentSearchText(searchText)
    setOffset((prev) => prev + 1)
    setIsSearching(false)
  }, [searchText, offset])

  const handleSearchText = useCallback((text: string) => {
    setSearchText(text)
    setOffset(0)
  }, [])

  return (
    <S.SearchBarContainer data-testid="search-bar__container">
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
          id="search-bar__textfield"
          size="small"
          color="error"
          placeholder="Search..."
          sx={{ width: '100%' }}
          value={searchText}
          onChange={(e) => handleSearchText(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              handleSearch()
            }
          }}
        />
        <LoadingButton
          id="search-bar__button"
          variant="contained"
          color="secondary"
          sx={{ height: '90%' }}
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
