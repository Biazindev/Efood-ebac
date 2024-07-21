import pizza from '../../../assets/pizza.png'
import Food from "../../models/food"
import Presentation from "../../Presentation"
import ProductList from "../../ProductList"

const perfil: Omit<Food, 'culture' | 'highlight' | 'score'>[] = [
  {
    id: 1,
    title: 'Pizza Marguerita',
    image: pizza,
    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
  },
  {
    id: 1,
    title: 'Pizza Marguerita',
    image: pizza,
    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
  },
  {
    id: 1,
    title: 'Pizza Marguerita',
    image: pizza,
    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
  },
  {
    id: 1,
    title: 'Pizza Marguerita',
    image: pizza,
    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
  },
  {
    id: 1,
    title: 'Pizza Marguerita',
    image: pizza,
    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
  },
  {
    id: 1,
    title: 'Pizza Marguerita',
    image: pizza,
    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
  }
]

const Categories = () => (
  <>
    <Presentation />
    <ProductList items={perfil} />
  </>
)

export default Categories
