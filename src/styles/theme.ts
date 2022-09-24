import styled, {css, createGlobalStyle} from 'styled-components';

export {css, styled};

export const theme = {
  colors: {
    black: '#000000',
    lighterBackgroundColor: '#293340',
    unactiveColor: '#d398e7',
    secondary: '#bc65db',
    background: '#121d2b',
    lightTextColor: 'white',
    darkTextColor: 'black',
    activeTextColor: '#a14dc1',
    contrast: '#111',
    contrastLightest: '#dad9d9',
    accent: 'red',
    white: '#ffffff',
  },
};

const reset = () => `
html {
  box-sizing: border-box;
  overflow-x:hidden;
  margin: 0;
  padding: 0;
}
:root{
 --unactive-color:${theme.colors.unactiveColor};
 --secondary-color:${theme.colors.secondary};
 --background-color:${theme.colors.background};
 --lightText-color:${theme.colors.lightTextColor};
 --darkText-color:${theme.colors.darkTextColor};
 --activeText-color:${theme.colors.activeTextColor};
 --lighterBackground-color:${theme.colors.lighterBackgroundColor};
}
*, *::before, *::after {
  box-sizing: inherit;
  margin:0;
  padding:0;
}

body {
  margin: 0 !important;
  padding: 0;
}

::selection {
  background-color: ${theme.colors.contrastLightest};
  color: rgba(0, 0, 0, 0.70);
}

a.anchor, a.anchor:hover, a.anchor:link {
  background: none !important;
}

figure {
  a.gatsby-resp-image-link {
    background: none;
  }

  span.gatsby-resp-image-wrapper {
    max-width: 100% !important;
  }
}
`;

// These style are based on https://edwardtufte.github.io/tufte-css/
const styles = () => `
html {
  font-size: 15px;
}

body {
font-family: 'Poppins', sans-serif;
  background-color: ${theme.colors.secondary};
  color: ${theme.colors.lightTextColor};
}

h1 {
  font-weight: 400;
  font-size: 3.2rem;
  line-height: 1;
}

h2 {
  font-style: italic;
  font-weight: 400;
  font-size: 2.2rem;
  line-height: 1;
}

h3 {
  font-style: italic;
  font-weight: 400;
  font-size: 1.7rem;
  line-height: 1;
}

hr {
  display: block;
  height: 1px;
  width: 55%;
  border: 0;
  border-top: 1px solid #ccc;
}



`;

export const GlobalStyle = createGlobalStyle`
${reset()}
${styles()}
`;
