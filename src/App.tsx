import { Container, GlobalCss } from './styles'
import { Header } from './components/Header'

function App() {
  return (
    <>
      <GlobalCss />
      <Container>
        <Header />
      </Container>
    </>
  )
}

export default App
