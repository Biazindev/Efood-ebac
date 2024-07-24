import Presentation from "../../Presentation"
import ProductList from "../../ProductList"
import { useEffect, useState } from "react"
import {  Restaurant } from "../Home"


export interface CardapioItem {
  foto: string;
  preco: number;
  id: number;
  nome: string;
  descricao: string;
  porcao: string;
}

const Categories = () => {
  const [foods, setFoods] = useState<CardapioItem[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then(res => res.json())
      .then((data: Restaurant[]) => {
        if (data.length > 0) {
          setFoods(data[0].cardapio)
        }
      })
      .catch(err => console.error("Falha ao buscar dados", err))
  }, [])

  return (
    <>
      <Presentation />
      <ProductList foods={foods} />
    </>
  )
}

export default Categories
