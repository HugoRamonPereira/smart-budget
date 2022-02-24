import { useState } from 'react'
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import GlobalStyle from "./styles/global";
import Modal from "react-modal";
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './hooks/useTransactions';

// For the modal to be rendered inside the root id and accessibility reasons
Modal.setAppElement('#root')

export function App() {
  const [isAddTransactionModalOpen, setIsAddTransactionModalOpen] = useState(false);

  function handleAddTransactionModal() {
    setIsAddTransactionModalOpen(true);
  }

  function handleCloseTransactionModal() {
    setIsAddTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onAddNewTransactionModal={handleAddTransactionModal} />
      <Dashboard />
      <NewTransactionModal 
        isOpen={isAddTransactionModalOpen}
        onRequestClose={handleCloseTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
