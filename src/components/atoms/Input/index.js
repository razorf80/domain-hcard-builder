import React from 'react';
import PropTypes from 'prop-types';
import {StyledInput} from './Style';

const Input = ({
  handleChange,
  width,
  type,
}) => (
  <StyledInput
    width={width}
    onChange = {e => handleChange && handleChange(type,e.target.value)}
  />
)

Input.propTypes = {
  handleChange: PropTypes.func,
  width: PropTypes.string,
  type: PropTypes.string,
}

export default Input;