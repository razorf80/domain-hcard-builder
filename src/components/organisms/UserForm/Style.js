import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({theme}) => theme.backgroundColor};
  padding: 80px;
  box-sizing: border-box;

  @media(max-width: ${({theme})  => theme.screen.sml}){
    padding: 24px;
  }
`

export const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  & > div{
    width: 48%;
  }

  @media (max-width: ${({theme}) => theme.screen.sml}) {
    flex-direction: column;

    & > div{
      width: 100%;
    }
  }
`

export const DetailsWrapper = styled.div`
  width: 100%;
  height: 100%;
  flex-direction: column;
  display: flex;

  & > div, h3{
    margin-bottom: 36px;
  }
`

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  & > div {
    width: 45%;
  }
`

export const SubmitWrapper = styled.div`
  width: 100%;
`