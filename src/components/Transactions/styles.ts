import styled from "styled-components";

export const Container = styled.div`
   margin-top: 4rem;

   table {
      width: 100%;
      border-spacing: 0 .5rem;
   }

   th {
      color: var(--text-body);
      font-weight: 500;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
   }

   td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);

      &:first-child {
      color: var(--text-title);
   }      
      &.deposit {
         color: var(--green);
      }

      &.withdraw {
         color: var(--red);
      }
    
   }
`

export const Trash = styled.button`
   background: transparent;
   border: none;
   font-size: 1.2rem;
   color: var(--text-body);
   transition: .2s ease-in;

   &:hover {
      color: var(--text-title);
   }
`