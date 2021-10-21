import { createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Gluten:wght@100;200;300;400;500;600;700;800;900&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Luckiest+Guy&display=swap');
  
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
    
  }
  body {
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.font.family.default};
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.font.family.secondary};
    margin: ${({ theme }) => theme.spacings.large} 0;
    
  }
  p {
    margin: ${({ theme }) => theme.spacings.medium} 0;
  }
  
  a {
    color: ${({ theme }) => theme.colors.secondaryColor};
  }

`;