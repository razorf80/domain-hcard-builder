import React from 'react';
import PropTypes from 'prop-types';

import {
  TitleWrapper,
  ContentWrapper,
} from './Style';

const UserDetail = ({
  title,
  ...rest
}) => (
  <div>
    <TitleWrapper>{title}</TitleWrapper>
    <ContentWrapper>{rest.children}</ContentWrapper>
  </div>
)

UserDetail.propTypes = {
  title: PropTypes.string,
}

export default UserDetail