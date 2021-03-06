import React from 'react';
import PropTypes from 'prop-types';
import {Wrapper, StyledInput, StyledLabel} from './Styled';

const UploadButton = ({
  label,
  type,
  handleChange,
}) => {
  const handleFileChange = event => {
    const hasFiles = event.target.files && event.target.files.length > 0;
    hasFiles && handleChange(type, URL.createObjectURL(event.target.files[0]))
  }

  return(
    <Wrapper>
      <StyledInput 
        type="file" 
        id={type} 
        onChange={handleFileChange}
        accept="image/*"
      />
      <StyledLabel htmlFor={type}>{`+ ${label}`}</StyledLabel>
    </Wrapper>
  )
}

UploadButton.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  handleChange: PropTypes.func,
}

export default UploadButton;