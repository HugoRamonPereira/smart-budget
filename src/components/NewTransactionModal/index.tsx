import { useState } from "react";
import Modal from "react-modal";
import { Container, TransactionTypeContainer, IncomeImg, ExpenseImg, RadioButton } from "./styles";
import xClose from "../../assets/close-modal-btn.svg";
import ExpenseIcon from "../../assets/red-circle.svg";
import IncomeIcon from "../../assets/green-circle.svg";
import { useTransactions } from "../../hooks/useTransactions";
import { useFormik } from "formik";
import * as Yup from 'yup'

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

interface NewTransactionInputValues {
  title: string
  value: number
  category: string
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const { createNewTransaction } = useTransactions()

  const [type, setType] = useState("deposit");

  async function handleCreateNewTransaction(values: NewTransactionInputValues) {

    await createNewTransaction({ ...values, type: type, amount: values.value});

    setType("income")
    onRequestClose()
  }

  const formik = useFormik({
    initialValues: {
      title: '',
      value: 0,
      category: ''
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Title cannot be empty!'),
      value: Yup.number().min(1, 'Value cannot be zero!'),
      category: Yup.string().required('Category cannot be empty!')
    }),
    onSubmit: (values) => {
      handleCreateNewTransaction(values)
    },
  })

  function close() {
    formik.resetForm()
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
        onClick={close}
        className="react-modal-close"
      >
        <img src={xClose} alt="Close modal"  />
      </button>

          <Container onSubmit={formik.handleSubmit}>
            <h2>Enter New Transaction</h2>
            <input
              placeholder="Title"
              name='title'
              value={formik.values.title}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.title && formik.errors.title && <small className="formik-error">{formik.errors.title}</small>}
            <input
              placeholder="Value"
              type="number"
              name='value'
              value={formik.values.value}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.value && formik.errors.value && <small className="formik-error">{formik.errors.value}</small>}
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
              name='category'
              value={formik.values.category}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.category && formik.errors.category && <small className="formik-error">{formik.errors.category}</small>}
            <button type="submit">Save</button>
          </Container>
    </Modal>
  );
}
