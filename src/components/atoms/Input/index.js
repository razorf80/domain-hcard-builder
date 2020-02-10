import React from 'react';
import PropTypes from 'prop-types';
import {StyledInput} from './Style';

const Input = ({
  handleChange,
  hCardClass,
  width,
  type,
}) => (
  <StyledInput
    className={hCardClass}
    width={width}
    onChange = {e => handleChange && handleChange(type,e.target.value)}
  />
)

Input.propTypes = {
  handleChange: PropTypes.func,
  hCardClass: PropTypes.string,
  width: PropTypes.string,
  type: PropTypes.string,
}

export default Input;