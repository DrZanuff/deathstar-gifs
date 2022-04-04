import { useEffect, useCallback } from 'react'
import { useAnimation, motion } from 'framer-motion'
import { Toaster } from 'react-hot-toast'
import { Header } from './components/Header'
import { InfiniteScroll } from './components/InfiniteScroll'
import { FavoriteScroll } from './components/FavoritesScroll'
import { GiphyAttribution } from './components/GiphyAttribution'
import { ModalEdit } from './components/ModalEdit'
import bgDesktop from './media/bg_desk.jpg'
import bgMobile from './media/bg_mobile.jpg'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { currentPageState, modalIsOpenState, favoritesState } from './atoms'
import { Gif } from './api/types'
import * as S from './styles/styles'

function App() {
  const currentPage = useRecoilValue(currentPageState)
  const isModalOpen = useRecoilValue(modalIsOpenState)
  const setFavorites = useSetRecoilState(favoritesState)

  useEffect(() => {
    const favorites = localStorage.getItem('favorites')
    if (favorites) {
      const savedGifs: Record<string, Gif> = JSON.parse(favorites)
      setFavorites(savedGifs)
    }
  }, [])

  const control = useAnimation()

  const openModal = useCallback(async () => {
    await control.start({
      visibility: 'visible'
    })
    control.start({
      opacity: 1
    })
  }, [control])

  const closeModal = useCallback(async () => {
    await control.start({
      opacity: 0
    })
    control.start({
      visibility: 'hidden'
    })
  }, [control])

  useEffect(() => {
    if (isModalOpen) {
      openModal()
    } else {
      closeModal()
    }
  }, [isModalOpen])

  return (
    <>
      <S.Background isMobile={false}>
        <img src={bgDesktop} alt="" />
      </S.Background>
      <S.Background isMobile>
        <img src={bgMobile} alt="" />
      </S.Background>
      <S.Body>
        <Header />
        {currentPage === 'favorites' && <FavoriteScroll />}
        {currentPage === 'search' && <InfiniteScroll />}
        <GiphyAttribution />

        <motion.div
          animate={control}
          initial={{ visibility: 'hidden', opacity: 0, zIndex: 2 }}
        >
          <ModalEdit />
        </motion.div>
      </S.Body>
      <Toaster />
    </>
  )
}

export default App
