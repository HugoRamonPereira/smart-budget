import styled from "styled-components";

export const Container = styled.div`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 2rem;
   margin-top: -10rem;

   div {
      background: var(--shape);
      padding: 1.5rem 2rem;
      border-radius: .25rem;
      color: var(--text-title);

      header {
      display: flex;
      align-items: center;
      justify-content: space-between;
   }

   p {
      font-size: 1.3rem;
      font-weight: 300;
   }

   strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
   }

   &.green-total {
      background: var(--green);
      color: #fff;
   }

   &.red-total {
      background: var(--red);
      color: #fff;
   }
}
`

export const Icons = styled.img`
   width: 2rem;
`

export const TotalIcon = styled.img`
   width: 1.3rem;
   height: 1.8rem;
`