import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  @media (max-width: ${({theme}) => theme.screen.sml}) {
    flex-direction: column;
  }
`

export const PreviewWrapper = styled.div`
  width: 40%;
  height: 100%;

  @media (max-width:${({theme}) => theme.screen.sml}){
    width: 100%;
    height: auto;
  }
`

export const FormWrapper = styled.div`
  width: 60%;
  height: 100%;

  @media (max-width:${({theme}) => theme.screen.sml}){
    width: 100%;
    height: auto;
  }
`