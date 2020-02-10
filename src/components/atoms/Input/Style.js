import styled from 'styled-components';

export const StyledInput = styled.input`
  height: 44px;
  border: 1px solid rgba(35, 66, 118, 0.9);
  box-sizing: border-box;
  border-radius: 3px;
  padding: 11px 16px;
  font-size: ${props => props.theme.fontSizeXXLarge}; 
  width: ${props => props.width ? props.width: 'auto'};
  border-radius: 3px;
`