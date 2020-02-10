import styled from 'styled-components'
import color from 'color';

export const Wrapper = styled.div`
  width: 100%;
  height: 253px;
  position: relative;
`

export const ImageWrapper = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const MenuWrapper = styled.div`
  position: absolute;
  right: 5%;
  top: 25px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 80px;

  @media (max-width: ${({theme}) => theme.screen.sml}){
    right: 44px;
  }
`

export const ProfileImg = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
  position: absolute;
  left: 10%;
  top: 203px;

  @media (max-width:${({theme}) => theme.screen.sml}) {
    left: 6%;
  }
`

export const MenuImgWrapper = styled.div`
  cursor: pointer;
  padding: 5px;

  &:hover{
    background-color: ${({theme}) => color(theme.colorMono).alpha(0.2).string()};
    border-radius: 50%;
    padding: 5px;
  }
`