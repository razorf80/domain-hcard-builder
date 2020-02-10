import React from 'react';
import PropTypes from 'prop-types';
import FormHeading from '../../molecules/FormHeading';
import FormInput from '../../molecules/FormInput';
import UploadButton from '../../atoms/UploadButton';
import SubmitButton from '../../atoms/SubmitButton';
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
  ButtonWrapper,
  FormWrapper,
  SubmitWrapper,
} from './Style';

const UserDetails = ({handleChange}) => (
  <DetailsWrapper>
    <FormHeading>Personal Details</FormHeading>
    <FormInput 
      label="FIRST NAME"
      handleChange={handleChange}
      type={FIRST_NAME}
    />
    <FormInput 
      label="LAST NAME"
      handleChange={handleChange}
      type={LAST_NAME}
    />
    <FormInput 
      label="EMAIL"
      handleChange={handleChange}
      type={EMAIL}
    />
    <FormInput 
      label="PHONE NUMBER"
      handleChange={handleChange}
      type={PHONE}
    />
  </DetailsWrapper>
)

const AddressDetails = ({handleChange}) => (
  <DetailsWrapper>
    <FormHeading>Address</FormHeading>
    <FormInput 
      label="SUITE / APT NUMBER"
      handleChange={handleChange}
      type={SUITE_NUMBER}
    />
    <FormInput 
      label="STREET NUMBER AND NAME"
      handleChange={handleChange}
      type={STREET}
    />
    <FormInput 
      label="STATE & POSTCODE"
      handleChange={handleChange}
      type={STATE_POSTCODE}
    />
    <FormInput 
      label="COUNTRY"
      handleChange={handleChange}
      type={COUNTRY}
    />
  </DetailsWrapper>
)

const UserForm = ({
  handleChange
}) => (
  <Wrapper>
    <h1>Profile Builder</h1>
    <FormWrapper>
      <UserDetails handleChange={handleChange}/>
      <AddressDetails handleChange={handleChange}/>
    </FormWrapper>
    <FormWrapper>
      <ButtonWrapper>
        <UploadButton label="Profile Picture"/>
        <UploadButton label="Cover Picture"/>
      </ButtonWrapper>
      <SubmitWrapper>
        <SubmitButton label="Create Profile"/>
      </SubmitWrapper>
    </FormWrapper>
  </Wrapper>
)

UserForm.propTypes = {
  handleChange: PropTypes.func,
}

export default UserForm