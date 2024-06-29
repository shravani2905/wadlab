import React from 'react';
import { useForm } from 'react-hook-form';
import './Signin.css';

function Registration() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className="registration-form" onSubmit={handleSubmit(onSubmit)}>
      <h2 className='text-success text-center'>Login</h2>
     
        
        <input type="text" placeholder='Enter Username'{...register('username', { required: 'Username is required' })} />
        {errors.username && <p className="error">{errors.username.message}</p>}
      
     
        <input type="password" placeholder='Enter passsword'{...register('password', { required: 'Password is required' })} />

        {errors.password && <p className="error">{errors.password.message}</p>}
      <button type="submit bg-success">Login</button>
    </form>
  );
}

export default Registration;



