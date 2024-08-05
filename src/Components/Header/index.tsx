import fundo from '../../assets/fundo.jpg'
import logo from '../../assets/logo.svg'
import Products from '../Products'

import { BackgroundImage, HeaderLogo, HeaderText, Logo } from './styles'

export type Props = {
  foods: CardapioItem[]
}

const Header = ({ foods }: Props) => (
  <HeaderLogo>
    <BackgroundImage src={fundo} alt="background" />
    <Logo><img src={logo} alt="logo"/></Logo>
    <HeaderText>Viva experiências gastronômicas no conforto da sua casa</HeaderText>
    <Products foods={[]}/>
  </HeaderLogo>
)

export default Header
