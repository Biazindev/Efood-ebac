import estrela from '../../assets/estrela.svg'
import { ButtonLink } from '../Button/styles'
import Tag from '../Tag'
import { Assessments, Border, Card, Container, Highlights, List, Titulo } from './styles'

type Props = {
  title: string
  score: number
  description: string
  culture: string
  highlight: string
  image: string
}

const Products = ({ title, score, description, culture, highlight, image }: Props) => (
    <List>
    <Card>
      <img src={image} alt={title} />
      <Highlights>
      {highlight && <Tag className="highlight-tag">{highlight}</Tag>}
        <Tag>{culture}</Tag>
      </Highlights>
      <Border>
        <Assessments>
          <Titulo>{title}</Titulo>
          <span>{score}</span>
          <img src={estrela} title='estrela' />
        </Assessments>
        <p>{description}</p>
        <ButtonLink type="link" to="/apresentacao">Saiba mais</ButtonLink>
      </Border>
    </Card>
    </List>
)

export default Products;
