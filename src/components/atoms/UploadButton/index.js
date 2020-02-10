import React from 'react';
import {Wrapper} from './Styled';

const UploadButton = ({
  label,
}) => (
  <Wrapper>
    {`+ ${label}`}
  </Wrapper>
)

export default UploadButton;