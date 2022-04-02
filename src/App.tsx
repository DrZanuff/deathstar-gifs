import { Header } from './components/Header'
import { InfiniteScroll } from './components/InfiniteScroll'
import { FavoriteScroll } from './components/FavoritesScroll'
import { GiphyAttribution } from './components/GiphyAttribution'
import { useRecoilValue } from 'recoil'
import { currentPageState } from './atoms'
import * as S from './styles/styles'

function App() {
  const currentPage = useRecoilValue(currentPageState)

  return (
    <>
      <S.Background isMobile={false}>
        <img src="/src/media/bg_desk.jpg" alt="" />
      </S.Background>
      <S.Background isMobile>
        <img src="/src/media/bg_mobile.jpg" alt="" />
      </S.Background>
      <S.Body>
        <Header />
        {currentPage === 'favorites' && <FavoriteScroll />}
        {currentPage === 'search' && <InfiniteScroll />}
        <GiphyAttribution />
      </S.Body>
    </>
  )
}

export default App
