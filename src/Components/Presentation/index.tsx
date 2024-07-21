import { Logo } from "../Header/styles"
import fundo from '../../assets/fundo.jpg'
import logo from '../../assets/logo.svg'
import apresentacao from '../../assets/apresentacao.svg'
import { BackgroundImg, Container, LinkCart } from "./styles"


const Presentation = () => (
    <div>
    <Container>
    <BackgroundImg src={fundo} alt="background" />
    <LinkCart>
    <h3>Restaurantes</h3>
    <span>0 produto(s) no carrinho</span>
    </LinkCart>  
    <img src={apresentacao} alt="entrada" />
    </Container>
    <div className="container">
            <Logo><img src={logo} alt="logo" /></Logo>
    </div>
    </div>
)

export default Presentation