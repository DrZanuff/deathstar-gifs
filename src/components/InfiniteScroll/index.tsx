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
    [isLoading, currentSearch, searchText, offset]
  )

  const handleSearch = useCallback(async () => {
    setIsLoading(true)
    generateSkeletons(10)
    const response = await getSearch(searchText, offset)

    setCurrentSearch((prev) => {
      return {
        pagination: response.responseObj.pagination,
        data: [...prev.data, ...response.responseObj.data]
      }
    })

    setOffset((prev) => prev + 1)
    setIsLoading(false)
  }, [offset, currentSearch, searchText])

  return (
    <S.InfiniteScrollContainer id="inifinite-scroll">
      <Box
        sx={{
          width: [390, 440, 650, 800, 1000],
          height: '100%',
          bottom: '0px',
          overflowY: 'auto',
          overflowX: 'hidden'
        }}
        onScroll={handleScroll}
      >
        <Masonry
          columns={[3, 3, 3, 4, 5]}
          spacing={2}
          sx={{ alignContent: 'flex-start' }}
        >
          {currentSearch.data.map((gif) => (
            <Card key={gif.id} gif={gif} editMode={false} />
          ))}
          {currentSearch.data.length > 0 &&
            currentSearch.pagination.total_count - 25 >
              currentSearch.data.length &&
            skeletons.map((skeleton, index) => (
              <CardTemplate height={skeleton} key={index} />
            ))}
        </Masonry>
      </Box>
    </S.InfiniteScrollContainer>
  )
}
