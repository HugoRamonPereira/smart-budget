import { FormEvent, useState } from "react";
import Modal from "react-modal";
import { Container, TransactionTypeContainer, IncomeImg, ExpenseImg, RadioButton } from "./styles";
import xClose from "../../assets/close-modal-btn.svg";
import ExpenseIcon from "../../assets/red-circle.svg";
import IncomeIcon from "../../assets/green-circle.svg";
import { useTransactions } from "../../hooks/useTransactions";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const { createNewTransaction } = useTransactions()

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [type, setType] = useState("deposit");

  async function handleCreateNewTransaction(e: FormEvent) {
    e.preventDefault();
    
    await createNewTransaction({
      title,
      amount,
      category,
      type,
    });

    setTitle("")
    setAmount(0)
    setCategory("")
    setType("income")
    onRequestClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={xClose} alt="Close modal" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Enter New Transaction</h2>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="Value"
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <TransactionTypeContainer>
          <RadioButton
            type="button"
            className="Income-field"
            onClick={() => {
              setType("deposit");
            }}
            isActive={type === "deposit"}
            activeColor="green"
            activeBorder="green"
          >
            <IncomeImg src={IncomeIcon} alt="Income" />
            <span>Income</span>
          </RadioButton>
          <RadioButton
            type="button"
            className="Expense-field"
            onClick={() => {
              setType("withdraw");
            }}
            isActive={type === "withdraw"}
            activeColor="red"
            activeBorder="red"
          >
            <ExpenseImg src={ExpenseIcon} alt="Expense" />
            <span>Expense</span>
          </RadioButton>
        </TransactionTypeContainer>
        <input
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type="submit">Save</button>
      </Container>
    </Modal>
  );
}
