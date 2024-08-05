import { BrowserRouter } from "react-router-dom"
import { Conteudo } from "./routes"
import { Provider } from "react-redux"

import { store } from "./Components/store"
import Footer from "./Components/Footer"

import { GlobalCss } from "./styles"

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <Conteudo />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App;
