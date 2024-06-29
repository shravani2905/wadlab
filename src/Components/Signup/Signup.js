import React from 'react';
import { useForm } from 'react-hook-form';
import './Signup.css';

function Registration() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className="registration-form" onSubmit={handleSubmit(onSubmit)}>
      <h2 className='text-success text-center'>Register</h2>
     
        
        <input type="text" placeholder='Enter Username'{...register('username', { required: 'Username is required' })} />
        {errors.username && <p className="error">{errors.username.message}</p>}
      
     
        <input type="email" placeholder='Enter email'{...register('email', { required: 'Email is required' })} />
        {errors.email && <p className="error">{errors.email.message}</p>}
      
      
        <input type="password" placeholder='Enter passsword'{...register('password', { required: 'Password is required' })} />

        {errors.password && <p className="error">{errors.password.message}</p>}
        <input type="text" placeholder='Enter address'{...register('address', { required: 'Address is required' })} />


        <input type="number" placeholder='Enter Pincode'{...register('pincode', { required: 'Pincode is required' })} />


      <button type="submit bg-success">Register</button>
    </form>
  );
}

export default Registration;



