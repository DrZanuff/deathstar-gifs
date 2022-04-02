import { Header } from './components/Header'
import * as S from './styles'

function App() {
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
      </S.Body>
    </>
  )
}

export default App
