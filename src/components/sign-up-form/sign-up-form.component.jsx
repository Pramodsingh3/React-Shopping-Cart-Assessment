import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';


import './sign-up-form.styles.scss';

const defaultFormFields = {
  firstName: '',
  secondName:'',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { firstName,secondName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('passwords do not match');
      return;
    }

  
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='sign-up-container'>
      <header className='login-header'>
      <h2>SignUp</h2>
      <span>We do not share your personal details with anyone</span>
      </header>
      <main className='form-signup'>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='First Name'
          type='text'
          required
          onChange={handleChange}
          name='firstName'
          value={firstName}
        />

        <FormInput
          label='Second Name'
          type='text'
          required
          onChange={handleChange}
          name='secondName'
          value={secondName}
        />

        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />

        <FormInput
          label='Confirm Password'
          type='password'
          required
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
        />
        
        <Button additionalClass='button-signup' type='submit'>Sign Up</Button>
        
      </form>
      </main>
    </div>
  );
};

export default SignUpForm;
