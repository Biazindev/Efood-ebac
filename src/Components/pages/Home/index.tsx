import { useEffect, useState } from "react"
import { Container } from "../../Products/styles"
import Products from "../../Products"

const Home = () => {  
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then(res => res.json())
      .then((data: Restaurant[]) => {
        console.log('Dados recebidos da API:', data)
        setRestaurants(data)
      })
      .catch(err => console.error("Falha ao buscar dados", err))
  }, [])

  return (
    <Container>
      <Products foods={restaurants} />
    </Container>
  )
}

export default Home
