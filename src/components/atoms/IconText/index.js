import React from 'react';
import PropTypes from 'prop-types';
import {Wrapper, TextWrapper} from './Style';

const IconText = ({
  iconUrl,
  text
}) => (
  <Wrapper>
    {iconUrl && <img src={iconUrl}/>}
    <TextWrapper>{text}</TextWrapper>
  </Wrapper>
)

IconText.propTypes = {
  iconUrl: PropTypes.string,
  text: PropTypes.string,
}

export default IconText;