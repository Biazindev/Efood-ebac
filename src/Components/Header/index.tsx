import fundo from '../../assets/fundo.jpg'
import logo from '../../assets/logo.svg'
import Food from '../models/food'
import Products from '../Products'
import { BackgroundImage, HeaderLogo, HeaderText, Logo } from './styles'

export type Props = {
    foods: Food[]
}

const Header = ({foods}: Props) => (
  <HeaderLogo>
        <BackgroundImage src={fundo} alt="background" />
        <Logo><img src={logo} alt="logo" /></Logo>
        <HeaderText>Viva experiências gastronômicas no conforto da sua casa</HeaderText>
        {foods.map((food) => (
            <Products
            key={food.id}
            title={food.title}
            score={food.score}
            description={food.description}
            culture={food.culture}
            highlight={food.highlight}
            image={food.image}
            />
        ))}
  </HeaderLogo>
)

export default Header