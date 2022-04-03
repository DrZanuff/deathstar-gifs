import { useEffect } from 'react'
import { CircularProgress, Card } from '@mui/material'
import { useAnimation, motion } from 'framer-motion'
import type { Gif } from '../../api/types'
import { useRecoilValue } from 'recoil'
import { currentGif } from '../../atoms'
import { Form } from './components/Form'
import * as S from './styles'

export function ModalEdit() {
  const control = useAnimation()

  const gif = useRecoilValue(currentGif)

  useEffect(() => {
    async function startAnimations() {
      await control.start({
        transform: 'scaleX(0)'
      })
      await control.start({
        transform: 'scaleX(1)'
      })
    }

    startAnimations()

    console.log('Animations')
  }, [gif])

  return (
    <S.ModalEditBackground>
      <Card
        sx={{
          maxWidth: '900px',
          width: '100%',
          height: 'fit-content',
          padding: '20px'
        }}
      >
        <S.ModalContainer>
          <S.ImageContainer>
            <S.ProgressContainer>
              <CircularProgress color="error" />
            </S.ProgressContainer>
            <motion.div animate={control} initial={{ zIndex: 2 }}>
              <img src={gif.images.original.webp} alt={gif.title} />
            </motion.div>

            <span>
              {gif.username !== '' ? (
                <>
                  by <b>{gif.username}</b>
                </>
              ) : (
                <b>GIPHY</b>
              )}
            </span>
          </S.ImageContainer>

          <Form />
        </S.ModalContainer>
      </Card>
    </S.ModalEditBackground>
  )
}
