import { useState } from 'react'
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import GlobalStyle from "./styles/global";
import Modal from "react-modal";

export function App() {
  const [isAddTransactionModalOpen, setIsAddTransactionModalOpen] =
    useState(false);

  function handleAddTransactionModal() {
    setIsAddTransactionModalOpen(true);
  }

  function handleCloseTransactionModal() {
    setIsAddTransactionModalOpen(false);
  }

  return (
    <>
      <Header onAddNewTransactionModal={handleAddTransactionModal} />
      <Dashboard />
      <Modal
        isOpen={isAddTransactionModalOpen}
        onRequestClose={handleCloseTransactionModal}
      >
        <h2>Enter New Transaction</h2>
      </Modal>
      <GlobalStyle />
    </>
  );
}
