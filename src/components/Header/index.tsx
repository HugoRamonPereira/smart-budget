import sblogo from '../../assets/Logo Name Centered.svg'
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