// import { useContext } from 'react';
import incomeIcon from '../../assets/green-circle.svg'
import expenseIcon from '../../assets/red-circle.svg'
import totalIcon from '../../assets/totalll.svg'
import { useTransactions } from '../../hooks/useTransactions';
import { Container, Icons, TotalIcon } from "./styles";

export function Summary() {
   const { transactions } = useTransactions()
   
   const summary = transactions.reduce((acc, transaction) => {
      if(transaction.type === 'deposit') {
         acc.deposits += transaction.amount
         acc.total += transaction.amount
      } else {
         acc.withdrawals += transaction.amount
         acc.total -= transaction.amount
      }
      return acc
   }, {
      deposits: 0,
      withdrawals: 0,
      total: 0
   })

   return (
      <Container>
         <div>
            <header>
               <p>Income</p>
               <Icons src={incomeIcon} alt="Income" />
            </header>
            <strong>
                  {new Intl.NumberFormat('pt-BR',{
                           style: 'currency',
                           currency: 'BRL',
                  }).format(summary.deposits)}
            </strong>
         </div>

         <div>
            <header>
               <p>Expense</p>
               <Icons src={expenseIcon} alt="Expense" />
            </header>
            <strong> -
            {new Intl.NumberFormat('pt-BR',{
                     style: 'currency',
                     currency: 'BRL',
            }).format(summary.withdrawals)}
            </strong>
         </div>

         <div className={summary.total >= 0 ? 'green-total' : 'red-total'}>
            <header>
               <p>Total</p>
               <TotalIcon src={totalIcon} alt="Total" />
            </header>
            <strong>
               {new Intl.NumberFormat('pt-BR',{
                        style: 'currency',
                        currency: 'BRL',
               }).format(summary.total)}
            </strong>
         </div>
      </Container>
   )
}