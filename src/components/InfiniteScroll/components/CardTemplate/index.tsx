import { Skeleton } from '@mui/material'
import { Masonry } from '@mui/lab'
import { CircularProgress } from '@mui/material'
import * as S from './styles'

interface CardTemplateProps {
  height: number
}

export function CardTemplate({ height }: CardTemplateProps) {
  return (
    <S.SkeletonBackground>
      <S.SpinnerContainer>
        <CircularProgress color="error" />
      </S.SpinnerContainer>
      <Skeleton
        variant="rectangular"
        animation="wave"
        width={200}
        height={height}
      />
    </S.SkeletonBackground>
  )
}
