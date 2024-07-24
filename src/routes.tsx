import { Routes, Route, useLocation } from "react-router-dom"
import Home from "./Components/pages/Home"
import Header from "./Components/Header"
import Categories from "./Components/pages/Categories"

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
);


export function Conteudo() {
  const location = useLocation();
  const motraHeader = !location.pathname.includes("apresentacao")

  return (
    <>
      {motraHeader && <Header foods={[]} />}
      <div className="container">
        <Routes>
          <Route path="/*" element={<Rotas />} />
        </Routes>
      </div>
      <Routes>
          <Route path="/apresentacao" element={<Categories />} />
      </Routes>
    </>
  )
}

export default Rotas
