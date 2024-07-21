import logo from '../../assets/logo.svg'
import instagram from '../../assets/instagram.svg'
import face from '../../assets/face.svg'
import x from '../../assets/x.svg'
import { Container, Icons } from './styles'

const Footer = () => (
        <Container>
        <img src={logo} />
        <Icons>
            <img src={instagram} alt='Instagram' />
            <img src={face} alt='Instagram' />
            <img src={x} alt='Instagram' />
        </Icons>
        <h4>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado. </h4>
        </Container>
)

export default Footer