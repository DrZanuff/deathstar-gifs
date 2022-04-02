import { Logo } from './components/Logo'
import * as S from './styles'

export function Header() {
  return (
    <S.HeadnerContainer>
      <Logo />
      <S.HeaderTitleContainer>
        <h1>Deathstar Gifs</h1>
      </S.HeaderTitleContainer>
    </S.HeadnerContainer>
  )
}
