import React from 'react';
import PropTypes from 'prop-types';
import {Wrapper, TextWrapper} from './Style';

const IconText = ({
  iconUrl,
  text,
  hcardClass,
}) => (
  <Wrapper>
    {iconUrl && <img src={iconUrl}/>}
    <TextWrapper className={hcardClass}>{text}</TextWrapper>
  </Wrapper>
)

IconText.propTypes = {
  iconUrl: PropTypes.string,
  text: PropTypes.string,
  hcardClass: PropTypes.string,
}

export default IconText;