import React from 'react';
import PropTypes from 'prop-types';
import {StyledFormLabel, StyledInput} from './Style';

const FormInput = ({
  label,
  handleChange,
  hCardClass,
  type,
}) => (
  <div>
    <StyledFormLabel>{label}</StyledFormLabel>
    <StyledInput
      handleChange={handleChange}
      hCardClass={hCardClass}
      type={type}
    />
  </div>
)

FormInput.propTypes = {
  label: PropTypes.string,
  handleChange: PropTypes.func,
  hCardClass: PropTypes.string,
  type: PropTypes.string,
}

export default FormInput