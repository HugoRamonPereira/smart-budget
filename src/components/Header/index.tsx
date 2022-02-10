import sblogo from '../../assets/logo-name-centered.svg'
import { Container, Content, Logo } from './styles'
import { AiOutlinePlus } from 'react-icons/ai'

interface HeaderProps {
   onAddNewTransactionModal: () => void
}

export function Header({onAddNewTransactionModal} : HeaderProps) {
   return (
      <Container>
         <Content>
            <Logo src={sblogo} alt="Smart Budget Logo" />
            <button type="button" onClick={onAddNewTransactionModal}> 
               <AiOutlinePlus /> New Transaction
            </button>
         </Content>
      </Container>
   )
} 