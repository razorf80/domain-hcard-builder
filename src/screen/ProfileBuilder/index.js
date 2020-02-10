import React, {useState} from 'react';
import UserForm from '../../components/organisms/UserForm';
import UserFormPreview from '../../components/organisms/UserFormPreview';
import {
  Wrapper,
  PreviewWrapper,
  FormWrapper
}from './Style';


const ProfileBuilder = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (type, value) => {
    setFormData({
      ...formData,
      [type]: value,
    })
  }

  return(
    <Wrapper>
      <PreviewWrapper>
        <UserFormPreview 
          userData={formData}
        />
      </PreviewWrapper>
      <FormWrapper>
        <UserForm
          handleChange = {handleChange}
        />
      </FormWrapper>
    </Wrapper>
  )
}

export default ProfileBuilder