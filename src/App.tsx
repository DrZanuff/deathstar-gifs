import { useEffect, useCallback } from 'react'
import { useAnimation, motion } from 'framer-motion'
import { Header } from './components/Header'
import { InfiniteScroll } from './components/InfiniteScroll'
import { FavoriteScroll } from './components/FavoritesScroll'
import { GiphyAttribution } from './components/GiphyAttribution'
import { ModalEdit } from './components/ModalEdit'
import { useRecoilValue } from 'recoil'
import { currentPageState, modalEditState, currentGif } from './atoms'
import * as S from './styles/styles'

function App() {
  const currentPage = useRecoilValue(currentPageState)
  const currentEditingGif = useRecoilValue(currentGif)
  const isModalOpen = useRecoilValue(modalEditState)

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
    console.log('CHANGIN', isModalOpen)
    if (isModalOpen) {
      openModal()
    } else {
      closeModal()
    }
  }, [isModalOpen])

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

        <motion.div
          animate={control}
          initial={{ visibility: 'hidden', opacity: 0, zIndex: 2 }}
        >
          <ModalEdit />
        </motion.div>
        {/* {isModalOpen && <ModalEdit {...currentEditingGif} />} */}
      </S.Body>
    </>
  )
}

export default App
