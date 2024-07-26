import Presentation from "../../Presentation";
import ProductList from "../../ProductList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export interface CardapioItem {
  titulo: string;
  foto: string;
  preco: number;
  id: number;
  nome: string;
  descricao: string;
  porcao: string;
}

export interface Restaurant {
  foto: string;
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  cardapio: CardapioItem[];
}

const Categories = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [selectedCardapio, setSelectedCardapio] = useState<CardapioItem[]>([]);
  const { id } = useParams<{ id?: string }>(); // ID pode ser undefined

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchRestaurant = async (id: number) => {
          const res = await fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`);
          const data: Restaurant = await res.json();
          return data;
        };

        const allRestaurants = await Promise.all([
          fetchRestaurant(1),
          fetchRestaurant(2),
          fetchRestaurant(3),
          fetchRestaurant(4),
          fetchRestaurant(5),
          fetchRestaurant(6),
        ]);

        setRestaurants(allRestaurants);

        if (id) {
          const selectedId = parseInt(id, 10);
          const selectedRestaurant = allRestaurants.find(restaurant => restaurant.id === selectedId);
          if (selectedRestaurant) {
            setSelectedCardapio(selectedRestaurant.cardapio);
          } else {
            setSelectedCardapio([]);
          }
        }
      } catch (err) {
        console.error("Falha ao buscar dados", err);
      }
    };

    fetchData();
  }, [id])

  const currentRestaurant = restaurants.find(restaurant => restaurant.id === parseInt(id || '0', 10));

  return (
    <>
      <Presentation food={currentRestaurant || { titulo: '', tipo: '' } } />
      {selectedCardapio.length > 0 ? (
        <ProductList foods={selectedCardapio} />
      ) : (
        <p>Restaurante não encontrado ou sem cardápio.</p>
      )}
    </>
  );
};

export default Categories;
