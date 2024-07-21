import Products from "../../Products"
import laDolce from '../../../assets/laDolce.jpg'
import sushi from '../../../assets/sushi.jpg'
import Food from "../../models/food"
import { Container} from "../../Products/styles"

const apresentacao: Food[] = [
  {
    id: 1,
    title: 'Hioki Sushi',
    score: 4.9,
    image: sushi,
    description: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    culture: 'Japonesa',
    highlight: 'Destaque da Semana',
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    score: 4.6,
    image: laDolce,
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    culture: 'Italiana',
    highlight: 'Destaque da Semana',
  },
  {
    id: 3,
    title: 'La Dolce Vita Trattoria',
    score: 4.6,
    image: laDolce,
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    culture: 'Italiana',
    highlight: 'Destaque da Semana',
  },
  {
    id: 4,
    title: 'La Dolce Vita Trattoria',
    score: 4.6,
    image: laDolce,
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    culture: 'Italiana',
    highlight: 'Destaque da Semana',
  },
  {
    id: 5,
    title: 'La Dolce Vita Trattoria',
    score: 4.6,
    image: laDolce,
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    culture: 'Italiana',
    highlight: 'Destaque da Semana',
  },
  {
    id: 6,
    title: 'La Dolce Vita Trattoria',
    score: 4.6,
    image: laDolce,
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    culture: 'Italiana',
    highlight: 'Destaque da Semana',
  }
]

const Home = () => (
    <Container>
      {apresentacao.map(food => (
        <Products
          key={food.id}
          title={food.title}
          score={food.score}
          description={food.description}
          culture={food.culture}
          highlight={food.id === 1 ? food.highlight : ''}          
          image={food.image}
        />
      ))}
    </Container>
  )

export default Home;
