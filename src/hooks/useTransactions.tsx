import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface TransactionProps {
   id: number,
   title: string,
   amount: number,
   type: string,
   category: string,
   createdAt: string
}

interface TransactionsProviderProps {
   children: ReactNode;
}

type NewTransactionDataInput = Omit<TransactionProps, 'id' | 'createdAt'>

interface TransactionContextData {
   transactions: TransactionProps[],
   createNewTransaction: (transaction: NewTransactionDataInput) => Promise<void>;
   deleteTransactionRow: (id: number) => void;
}

const TransactionsContext = createContext<TransactionContextData>({} as TransactionContextData)

export function TransactionsProvider({ children } : TransactionsProviderProps){
   const [transactions, setTransactions] = useState<TransactionProps[]>([])

   useEffect(() => {
      api.get('transactions')
         .then(response => setTransactions(response.data.transactions))
   }, [])

   async function createNewTransaction(transactionInput: NewTransactionDataInput) {
      console.log("transactionInput", transactionInput)
      const response = await api.post('/transactions', {
         ...transactionInput,
         createdAt: new Date()
      })
      const { transaction } = response.data;

      setTransactions([
         ...transactions,
         transaction
      ])
   }

   // Method to delete transaction we click
   function deleteTransactionRow(id: number) {
      setTransactions(transactions.filter((transaction) => {
         return transaction.id !== id
      }))
   }

   return (
      <TransactionsContext.Provider value={{ transactions, createNewTransaction, deleteTransactionRow }}>
         {children}
      </TransactionsContext.Provider>
   )
} 

export function useTransactions() {
   const context = useContext(TransactionsContext)
   return context
}