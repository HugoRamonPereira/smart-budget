import sblogo from '../../assets/logo-name-centered.svg'
import { Container, Content, Logo } from './styles'
import { AiOutlinePlus } from 'react-icons/ai'

export function Header() {
   return (
      <Container>
         <Content>
            <Logo src={sblogo} alt="Smart Budget Logo" />
            <button type="button"> <AiOutlinePlus /> New Transaction</button>
         </Content>
      </Container>
   )
} 