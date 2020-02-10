import React from 'react';

import CoverPreview from '../../molecules/CoverPreview';
import UserDetail from '../../atoms/UserDetail';
import IconText from '../../atoms/IconText'
import emailIcon from '../../../style/assets/email-icon.svg';
import phoneIcon from '../../../style/assets/phone-icon.svg';

import {
  FIRST_NAME,
  LAST_NAME,
  EMAIL,
  PHONE,
  SUITE_NUMBER,
  STREET,
  STATE_POSTCODE,
  COUNTRY,
} from '../../../constants/userFormType';

import {
  Wrapper,
  DetailsWrapper,
  NameHeading,
  ContactWrapper,
  AddressWrapper,
} from './Style'

const UserFormPreview = ({
  userData
}) => {
  const isEmpty = val => val === undefined || val === null || val === '';

  const getName = (firstName, lastName) => {
    if(isEmpty(firstName) && isEmpty(lastName)) return 'Name';
    return `${userData[FIRST_NAME] || ''} ${userData[LAST_NAME] || ''}`;
  }

  const getAddress = (suiteNum, address) => {
    if(isEmpty(suiteNum) && isEmpty(address)) return '123 Sample Address';
    const street = isEmpty(suiteNum) ? [] : [suiteNum];
    let suburb = '';
    if(!isEmpty(address)){
      const index = address.indexOf(',');
      street.push(index === -1 ? address : address.slice(0,index));
      console.log('HEREE', address);
      suburb = index === -1 ? '': address.slice(index + 1,address.length);
      console.log(suburb);
    }
    return (
      <React.Fragment>
        <div>{street.length > 0 && `${street.join(', ')}`}</div>
        <div>{!isEmpty(suburb) && `${suburb}`}</div>
      </React.Fragment>
    )
  }
  return(
    <Wrapper>
      <CoverPreview/>
      <DetailsWrapper>
        <NameHeading>
          {getName(userData[FIRST_NAME],userData[LAST_NAME])}
        </NameHeading>
        <ContactWrapper>
          <IconText
            iconUrl={emailIcon}
            text={`${isEmpty(userData[EMAIL]) ? 'email address' : userData[EMAIL]}`}
          />
          <IconText
            iconUrl={phoneIcon}
            text={`${isEmpty(userData[PHONE]) ? 'phone number' : userData[PHONE]}`}
          />
        </ContactWrapper>
        <AddressWrapper>
          <UserDetail title="ADDRESS">
            {getAddress(userData[SUITE_NUMBER], userData[STREET])}
          </UserDetail>
          <UserDetail title="STATE & POSTCODE">
            <div>{`${isEmpty(userData[STATE_POSTCODE])?'XXX 0000':userData[STATE_POSTCODE]}`}</div>
          </UserDetail>
          <UserDetail title="COUNTRY">
            <div>{`${isEmpty(userData[COUNTRY])?'Country name':userData[COUNTRY]}`}</div>
          </UserDetail>
        </AddressWrapper>
      </DetailsWrapper>
    </Wrapper>
  )
}

export default UserFormPreview;