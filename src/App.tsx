import { BrowserRouter } from "react-router-dom"
import { GlobalCss } from "./styles"
import Footer from "./Components/Footer"
import { Conteudo } from "./routes"

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Conteudo />
      <Footer />
    </BrowserRouter>
  )
}

export default App;
