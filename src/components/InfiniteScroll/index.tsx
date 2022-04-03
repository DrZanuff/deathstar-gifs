import { useRecoilState } from 'recoil'
import { Masonry } from '@mui/lab'
import { Card } from '../Card'
import { currentSearchResults } from '../../atoms'
import { Box } from '@mui/material'
import * as S from './styles'

export function InfiniteScroll() {
  const [currentSearch, setCurrentSearch] = useRecoilState(currentSearchResults)

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
      >
        <Masonry columns={4} spacing={2}>
          {currentSearch.data.map((gif) => (
            <Card key={gif.id} {...gif} />
          ))}
        </Masonry>
      </Box>
    </S.InfiniteScrollContainer>
  )
}
