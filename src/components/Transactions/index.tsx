import { useTransactions } from "../../hooks/useTransactions";
import { Container, Trash } from "./styles";
import { IoTrashOutline } from "react-icons/io5"
import Tippy from "@tippyjs/react";
import 'tippy.js/dist/tippy.css';

export function TransactionsTable(){
   const { transactions, deleteTransactionRow } = useTransactions()

function onDeleteTransactionRow(id: number) {
   deleteTransactionRow(id)
}
   return (
      <Container>
         <table>
            <thead>
               <tr>
                  <th>Title</th>
                  <th>Value</th>
                  <th>Category</th>
                  <th>Date</th>
               </tr>
            </thead>
            <tbody>
               {transactions.map(transaction => (
                  <tr key={transaction.id}>
                     <td>{transaction.title}</td>
                     <td className={transaction.type}>
                        {new Intl.NumberFormat('pt-BR',{
                           style: 'currency',
                           currency: 'BRL',
                        }).format(transaction.amount)}
                     </td>
                     <td>{transaction.category}</td>
                     <td>
                        {new Intl.DateTimeFormat('pt-BR').format(
                           new Date((transaction.createdAt))
                        )}
                     </td>
                     <td>
                        <Tippy content={<span>Delete this transaction</span>} placement='right' delay={200}>
                           <Trash 
                              type="button"
                              onClick={() => onDeleteTransactionRow(transaction.id)}
                           >
                              < IoTrashOutline />   
                           </Trash>
                        </Tippy>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </Container>
   );
}