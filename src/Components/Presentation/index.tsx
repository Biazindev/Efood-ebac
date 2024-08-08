import { useDispatch, useSelector } from "react-redux"

import { RootReducer } from "../store"
import { open } from '../store/reducers/cart'

import { Logo } from "../Header/styles"
import fundo from '../../assets/fundo.jpg'
import logo from '../../assets/logo.svg'
import apresentacao from '../../assets/apresentacao.png'

import { BackgroundImg, Container, LinkCart, ImageContainer, OverlayText } from "./styles"

type Props = {
  food: {
    titulo: string
    tipo: string
    capa: string 
  }
}

const Presentation = ({ food }: Props) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <div>
      <Container>
        <BackgroundImg src={fundo} alt="background" /> 
        <LinkCart>
          <h3>Restaurantes</h3>
          <span onClick={openCart}>{items.length} produto(s) no carrinho</span>
        </LinkCart>
        <ImageContainer>
          <img className="img-edit" src={food.capa} alt="entrada" />
        </ImageContainer>
        <div className="container">
          <OverlayText>
            <p className="align">{food.tipo}</p>
            <p><span>{food.titulo}</span></p>
          </OverlayText>
        </div>
      </Container>
      <div className="container">
        <Logo><img src={logo} alt="logo" /></Logo>
      </div>
    </div>
  )
}

export default Presentation
