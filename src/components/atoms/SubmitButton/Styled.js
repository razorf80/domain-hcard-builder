import styled from 'styled-components';
import color from 'color';

export const Wrapper = styled.div`
  border: 1px solid ${({theme}) => theme.colorPrimary};
  height: 44px;
  display: flex;
  font-size: ${({theme}) => theme.fontSizeXLarge};
  font-weight: bold;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  background-color: ${({theme}) => theme.colorPrimary};
  color: ${({theme}) => theme.colorMonoXLight};

  
  &:hover{
    background-color: ${({theme}) => color(theme.colorPrimary).lighten(0.1).string()};
  }

  &:active{
    background-color: ${({theme}) => color(theme.colorPrimary).lighten(0.2).string()};
  }
`