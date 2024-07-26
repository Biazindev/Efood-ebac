import estrela from '../../assets/estrela.svg';
import { ButtonLink } from '../Button/styles';
import Tag from '../Tag';
import { Assessments, Border, Card, Highlights, List, Titulo } from './styles';
import { Restaurant } from '../pages/Home';

type ListProps = {
  foods: Restaurant[]
}
const getDescricao = (descricao: string) => {
  if (descricao.length > 250) {
      return descricao.slice(0, 247) + '...'
  }
  return descricao
}
const Products = ({ foods }: ListProps) => {
  return (
    <List>
      {foods.map(food => (
        <Card key={food.id}>
          <img 
            src={food.capa || 'fallback-image-url'} 
            alt="Imagem do restaurante" 
            onError={(e) => e.currentTarget.src = 'fallback-image-url'} 
          />
          <Highlights>
            {food.destacado && <Tag className="destacado-tag" size="big">Destaque da semana</Tag>}
            <Tag size="small">{food.tipo}</Tag>
          </Highlights>
          <Border>
            <Assessments>
              <Titulo>{food.titulo}</Titulo>
              <span>{food.avaliacao}</span>
              <img src={estrela} title='estrela' alt="Estrela de avaliação" />
            </Assessments>
            <p>{getDescricao(food.descricao)}</p>
            <ButtonLink type="link" to={`apresentacao/${food.id}`}>Saiba mais</ButtonLink>
          </Border>                 
        </Card>
      ))}
    </List>
  )
}

export default Products;
