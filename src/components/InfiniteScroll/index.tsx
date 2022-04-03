import { useState, useCallback } from 'react'

import { useRecoilState, useRecoilValue } from 'recoil'
import {
  currentSearchResults,
  currentSearchText,
  querySearchOffset
} from '../../atoms'
import { getSearch } from '../../api'

import { Masonry } from '@mui/lab'
import { Box } from '@mui/material'
import Card from '../Card'
import { generateRandomNumbers } from '../../utils/generateRandomNumbers'
import { CardTemplate } from './components/CardTemplate'
import * as S from './styles'

export function InfiniteScroll() {
  const [currentSearch, setCurrentSearch] = useRecoilState(currentSearchResults)
  const [offset, setOffset] = useRecoilState(querySearchOffset)
  const searchText = useRecoilValue(currentSearchText)

  const [skeletons, setSkeletons] = useState(generateRandomNumbers(10))
  const [isLoading, setIsLoading] = useState(false)

  const generateSkeletons = useCallback((size: number) => {
    const array = generateRandomNumbers(size)
    setSkeletons(array)
  }, [])

  const handleScroll = useCallback(
    (event: React.UIEvent<HTMLDivElement, UIEvent>) => {
      const scrollHeight = event.currentTarget.scrollHeight
      const scrollTop = event.currentTarget.scrollTop
      const clientHeight = event.currentTarget.clientHeight

      const bottom = Math.abs(scrollHeight - (scrollTop + clientHeight)) <= 1

      if (
        bottom === true &&
        isLoading === false &&
        currentSearch.data.length > 0
      ) {
        handleSearch()
      }
    },
    [isLoading, currentSearch]
  )

  const handleSearch = useCallback(async () => {
    setIsLoading(true)
    generateSkeletons(10)
    const response = await getSearch(searchText, offset)

    const newSearch = [...currentSearch.data, ...response.responseObj.data]

    setCurrentSearch({
      pagination: response.responseObj.pagination,
      data: newSearch
    })

    setOffset((prev) => prev + 1)
    setIsLoading(false)
  }, [offset, currentSearch])

  console.log('FROM INIFINITE SCROLL', currentSearch)

  return (
    <S.InfiniteScrollContainer>
      <Box
        sx={{
          width: [220, 440, 650, 800, 1200],
          height: '100%',
          bottom: '0px',
          overflowY: 'auto',
          overflowX: 'hidden'
        }}
        onScroll={handleScroll}
      >
        <Masonry columns={4} spacing={2}>
          {currentSearch.data.map((gif) => (
            <Card key={gif.id} gif={gif} renderIcon={false} />
          ))}
          {currentSearch.data.length > 0 &&
            skeletons.map((skeleton, index) => (
              <CardTemplate height={skeleton} key={index} />
            ))}
        </Masonry>
      </Box>
    </S.InfiniteScrollContainer>
  )
}
