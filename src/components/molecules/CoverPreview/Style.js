import styled from 'styled-components'

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
  width: 60px;

  @media (max-width: ${({theme}) => theme.screen.sml}){
    right: 34px;
  }
`

export const ProfileImg = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
  position: absolute;
  left: 5%;
  top: 203px;
`