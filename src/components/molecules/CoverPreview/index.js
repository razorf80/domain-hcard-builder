import React from 'react';
import PropTypes from 'prop-types';
import cover from '../../../style/assets/default-cover-photo.png';
import notification  from '../../../style/assets/notifications-icon.svg';
import menu  from '../../../style/assets/menu-icon.svg';
import avatar  from '../../../style/assets/default-avatar.png';
import {
  Wrapper, 
  ImageWrapper, 
  MenuWrapper,
  ProfileImg,
  MenuImgWrapper
} from './Style';

const CoverPreview = ({
  coverUrl,
  avatarUrl,
}) => (
  <Wrapper>
    <ImageWrapper src={coverUrl?coverUrl:cover}/>
    <MenuWrapper>
      <MenuImgWrapper>
        <img src={notification} alt="notification"/>
      </MenuImgWrapper>
      <MenuImgWrapper>
        <img src={menu} alt="menu"/>
      </MenuImgWrapper>
    </MenuWrapper>
    <ProfileImg src={avatarUrl?avatarUrl:avatar}/>
  </Wrapper>
)

CoverPreview.propTypes = {
  coverUrl: PropTypes.string,
  avatarUrl: PropTypes.string,
}

export default CoverPreview