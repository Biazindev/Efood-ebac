import { ButtonContainer } from '../Button/styles'
import Food from '../models/food'
import { Card, Container, List } from './styles'

type ProductListProps = {
  items: Omit<Food, 'culture' | 'highlight' | 'score'>[]
}

const ProductList = ({ items }: ProductListProps) => (
  <Container>
    {items.map(item => (
      <List>
        <Card key={item.id}>
        <img src={item.image} alt='pizza' />
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <ButtonContainer>Adicionar ao carrinho</ButtonContainer>
      </Card>
      </List>
    ))}
  </Container>
)

export default ProductList
