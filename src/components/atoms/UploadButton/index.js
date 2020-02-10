import React from 'react';
import {Wrapper, StyledInput} from './Styled';

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
      <label htmlFor={type}>{`+ ${label}`}</label>
    </Wrapper>
  )
}

export default UploadButton;