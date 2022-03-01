import { useTransactions } from "../../hooks/useTransactions";
import { Container, EmptyTransaction, Trash } from "./styles";
import { IoTrashOutline } from "react-icons/io5"
import Tippy from "@tippyjs/react";
import 'tippy.js/dist/tippy.css';
import Lottie from 'react-lottie';
import * as animationData from '../../../src/assets/empty-animation.json'

const defaultOptions = {
   loop: true,
   autoplay: true, 
   animationData: animationData,
   rendererSettings: {
     preserveAspectRatio: 'xMidYMid slice'
   }
 };

export function TransactionsTable(){
   const { transactions, deleteTransactionRow } = useTransactions()

function onDeleteTransactionRow(id: number) {
   deleteTransactionRow(id)
}
   return (
      <Container>
         {transactions.length === 0 ? 
         <>
         <Lottie options={defaultOptions}
                 height={300}
                 width={700}
          />
         <EmptyTransaction>You don't have any transactions yet!</EmptyTransaction> 
         </>

         : (
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
         )}
      </Container>
   );
}