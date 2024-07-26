import { Logo } from "../Header/styles";
import fundo from '../../assets/fundo.jpg';
import logo from '../../assets/logo.svg';
import apresentacao from '../../assets/apresentacao.png';
import { BackgroundImg, Container, LinkCart, ImageContainer, OverlayText } from "./styles";

type PresentationProps = {
  food: {
    titulo: string
    tipo: string
  }
};

const Presentation = ({ food }: PresentationProps) => (
  <div>
    <Container>
      <BackgroundImg src={fundo} alt="background" />
      <LinkCart>
        <h3>Restaurantes</h3>
        <span>0 produto(s) no carrinho</span>
      </LinkCart>
      <ImageContainer>
        <img className="img-edit" src={apresentacao} alt="entrada" />
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
);

export default Presentation;
