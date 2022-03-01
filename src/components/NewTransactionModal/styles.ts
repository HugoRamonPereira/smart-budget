import styled from "styled-components";
import { transparentize } from "polished";

export const Container = styled.form`
   h2 {
      color: var(--text-title);
      font-size: 1.5rem;
      margin-bottom: 2rem;
   }

   input {
      width: 100%;
      padding: 0 1.5rem;
      height: 4rem;
      border-radius: 0.25rem;
      background: #e7e9ee;
      border: 1px solid #d7d7d7;
      font-weight: 500;
      font-size: 1rem;
      /* margin-bottom: 1.3rem; */

      &::placeholder {
         color: var(--text-body);
      }

      & + input {
         margin-top: 1rem;
      }
   }

   button[type="submit"] {
      width: 100%;
      padding: 0 1.5rem;
      height: 4rem;
      background: var(--green);
      color: #fff;
      border-radius: 0.25rem;
      border: none;
      font-size: 1.3rem;
      font-weight: 500;
      margin-top: 1.5rem;
      transition: filter 0.2s;

      &:hover {
         filter: brightness(0.91);
      }
   }
` 

export const TransactionTypeContainer = styled.div`
   margin: 1rem 0;
   display: grid;
   grid-template-columns: 1fr 1fr;
   gap: .5rem;
`

interface RadioButtonProps {
   isActive: boolean;
   activeColor: 'green' | 'red';
   activeBorder: 'green' | 'red';
}

const colors = {
   green: '#3CB371',
   red: '#e52e4d'
}

const borderColors = {
   green: '1px solid #3CB371',
   red: '1px solid #e52e4d'
}


export const RadioButton = styled.button<RadioButtonProps>`
      height: 3.5rem;   
      border: ${(props) => props.isActive
         ? borderColors[props.activeBorder]
         : '1px solid #d7d7d7'
   };
      border-radius: 0.25rem;

      background: ${(props) => props.isActive 
         ? transparentize(.9, colors[props.activeColor])
         : '#e7e9ee'
      };
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;

   span {
      font-size: 1rem;
      color: var(--text-title)
   }
`

export const IncomeImg = styled.img`
   width: 1.6rem;
`

export const ExpenseImg = styled.img`
   width: 1.6rem;
`

export const Error1 = styled.p`
   color: var(--red);
   margin-top: .3rem;
   margin-bottom: 1rem;
   font-size: .7rem;
`
export const Error = styled.p`
   color: var(--red);
   margin-top: .3rem;
   font-size: .7rem;
`