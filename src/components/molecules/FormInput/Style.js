import styled from 'styled-components';
import Input from '../../atoms/Input';

export const StyledFormLabel = styled.div`
  line-height: 16px;
`

export const StyledInput = styled(Input).attrs({
  width: '100%',
})`
  width: 100%;
`