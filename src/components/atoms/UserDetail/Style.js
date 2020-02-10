import styled from 'styled-components';

export const TitleWrapper = styled.div`
  color: ${({theme}) => theme.colorMonoLight};
  line-height: 14px;
`

export const ContentWrapper = styled.div`
  padding: 4px 0px;
  font-size: ${({theme}) => theme.fontSizeXLarge};
  line-height: 19px;
`