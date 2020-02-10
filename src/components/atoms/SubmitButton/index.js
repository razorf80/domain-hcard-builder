import React from 'react';
import PropTypes from 'prop-types';
import {Wrapper} from './Styled';

const SubmitButton = ({
  label,
}) => (
  <Wrapper>{label}</Wrapper>
)

SubmitButton.propTypes = {
  label: PropTypes.string,
}

export default SubmitButton;