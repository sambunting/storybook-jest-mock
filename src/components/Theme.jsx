import React from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';

import '../font/fonts.css';

const GlobalStyle = createGlobalStyle`
  :root {
    --color-red: rgba(220, 38, 60, 1);
    --color-white: rgba(255, 255, 255, 1);
    --color-grey: rgba(196, 196, 196, 1);
    --color-grey-dark: rgba(84, 84, 84, 1);
    --color-black: rgba(0, 0, 0, 1);
  }

  body {
    font-family: Myriad Pro;
    font-size: 16px;
    color: var(--color-grey-dark)
  }
`;

function Theme({ children }) {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
}

Theme.propTypes = {
  /**
   * The contents
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Theme;
