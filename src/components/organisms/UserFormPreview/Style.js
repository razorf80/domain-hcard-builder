import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  color: ${({theme}) => theme.colorMono};
`

export const DetailsWrapper = styled.div`
  width: 100%;
  padding-top: 100px;
  padding: 62px 10%;
  box-sizing: border-box;

  @media (max-width:${({theme}) => theme.screen.sml}) {
    padding: 62px 6%;
  }
`

export const NameHeading = styled.div`
  font-family: ${({theme}) => theme.secondaryFontFamily};
  font-size: ${({theme}) => theme.fontSizeXXXXLarge};
  line-height: 48px;
`

export const ContactWrapper = styled.div`
  padding-top: 20px;

  & > div{
    padding: 4px 0px;
  }
`

export const AddressWrapper = styled.div`
  padding-top: 42px;

  & > div{
    padding-bottom: 32px;
  }
`