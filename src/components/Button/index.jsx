import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Style = styled.button`
  background: var(--color-red);
  color: var(--color-white);
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  border: none;
  padding: 10px 25px;
  padding-top: 12px;
  border-radius: 7px;
  cursor: pointer;

  &:disabled {
    background-color: var(--color-grey);
  }
`;

function Button({ children, disabled, onClick }) {
  return (
    <Style type="button" onClick={onClick} disabled={disabled}>
      {children}
    </Style>
  );
}

Button.propTypes = {
  /**
   * The contents of the button
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  /**
   * Boolean on if the button should be disabled
   */
  disabled: PropTypes.bool,
  /**
   * Function that is called when the button is clicked
   */
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  disabled: false,
};

export default Button;
