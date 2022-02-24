import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   :root {
      --background: #f0f2f5;
      --red: #e52e4d;
      --red2: #e62e4d;
      --green: #3CB371;
      --blue: #414FF8;
      --blue-light: #5967ff;
      --text-title: #363f5f;
      --text-body: #969cb3;
      --shape: #FFFFFF;
   }
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   html {
      @media (max-width: 1080px) {
         font-size: 93.75%
      }
      @media (max-width: 720px) {
         font-size: 87.5%
      }
   }

   body { 
      background: var(--background);
      -webkit-font-smoothing: antialiased
   }

   body, input, textarea, button {
      font-family: 'Red Hat Display', sans-serif;
      font-weight: 500;
   }
   
   h1, h2, h3, h4, h5, h6, strong {
      font-weight: 500;
   }

   button {
      cursor: pointer
   }

   [disabled] {
      opacity: 0.6;
      cursor: not-allowed;
   }

   .react-modal-overlay {
      background: rgba(0, 0, 0, 0.5); 
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
   }

   .react-modal-content {
      width: 100%;
      max-width: 576px;
      background: var(--background);
      padding: 4rem;
      position: relative;
      border-radius: 0.25rem;
   }

   .react-modal-close {
      position: absolute;
      right: 1.5rem;
      top: 1.5rem;
      border: 0;
      background: transparent;
      transition: filter .2s;

      &:hover {
         filter: brightness(.8)
      }
   }
`

export default GlobalStyle