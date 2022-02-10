import incomeIcon from '../../assets/green-circle.svg'
import expenseIcon from '../../assets/red-circle.svg'
import totalIcon from '../../assets/totalll.svg'
import { Container, Icons, TotalIcon } from "./styles";

export function Summary() {
   return (
      <Container>
         <div>
            <header>
               <p>Income</p>
               <Icons src={incomeIcon} alt="Income" />
            </header>
            <strong>$ 1000,00</strong>
         </div>

         <div>
            <header>
               <p>Expense</p>
               <Icons src={expenseIcon} alt="Expense" />
            </header>
            <strong>- $ 500,00</strong>
         </div>

         <div className="green-total">
            <header>
               <p>Total</p>
               <TotalIcon src={totalIcon} alt="Total" />
            </header>
            <strong>$ 500,00</strong>
         </div>
      </Container>
   )
}