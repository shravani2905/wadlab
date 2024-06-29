import React from 'react';
import { useForm } from 'react-hook-form';
import './Contact.css';

function Registration() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className="registration-form" onSubmit={handleSubmit(onSubmit)}>
      <h2 className='text-success text-center'>Contact Us</h2>
     
        
        <input type="text" placeholder='Enter your name'{...register('username', { required: 'Username is required' })} />
        {errors.username && <p className="error">{errors.username.message}</p>}
      
     
        <input type="text" placeholder='Ente your query'{...register('password', { required: 'Password is required' })} />
        <input type="text" placeholder='Ente your mobile number'{...register('password', { required: 'Password is required' })} />
        <input type="text" placeholder='Ente your email'{...register('password', { required: 'Password is required' })} />

        {errors.password && <p className="error">{errors.password.message}</p>}
      <button type="submit bg-success">Submit</button>
    </form>
  );
}

export default Registration;



