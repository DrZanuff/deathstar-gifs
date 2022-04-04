import giphyLogo from '../../media/PoweredBy_200px-Black_HorizLogo.png'
import * as S from './styles'

export function GiphyAttribution() {
  return (
    <S.GiphyAttributionContainer>
      <a href="https://giphy.com/" target="_blank" rel="external">
        <img src={giphyLogo} alt="GIPHY Logo" />
      </a>
    </S.GiphyAttributionContainer>
  )
}
