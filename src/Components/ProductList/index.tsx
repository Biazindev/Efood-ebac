import { ButtonContainer } from '../Button/styles'
import { CardapioItem } from '../pages/Categories'
import { Card, Container, List } from './styles'

type ProductListProps = {
  foods: CardapioItem[]
}
const getDescricao = (descricao: string) => {
  if (descricao.length > 150) {
      return descricao.slice(0, 147) + '...'
  }
  return descricao
}
const ProductList = ({ foods }: ProductListProps) => (
  <Container>
    {foods.map((food) => (
      <List key={food.id}>
        <Card>
          <img src={food.foto} alt={food.nome} />
          <h3>{food.nome}</h3>
          <p>{getDescricao(food.descricao)}</p>
          <ButtonContainer>Adicionar ao carrinho</ButtonContainer>
        </Card>
      </List>
    ))}
  </Container>
)

export default ProductList
