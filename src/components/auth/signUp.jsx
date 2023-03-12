import React from 'react'
import {useForm} from 'react-hook-form'

const SignUp = () => {  
    const {getValues,register,handleSubmit,formState: {errors}} = useForm()
    const onSub = (_bodyData) =>{
console.log(_bodyData)
        }
        console.log(errors);
  return (
    <div className='d-flex justify-content-center pt-5'>
        {/* 
        First Name
        Last Name
        Email
        Password
        Confirm Password
        Country(optional)
        */}

        <form onSubmit={handleSubmit(onSub)} style={{borderRadius:'30px'}} className='col-lg-4 col-md-5 col-10 shadow border p-3'>
        <h1 className='display-6'>Sign Up</h1>

        <div className='mt-2'>
            <label>First Name:</label>
            <input {...register('firstName',{required:{value:true,message:"first name is required..."},minLength:{value:2,message:"min 2 char..."}})} type='text' className='form-control' placeholder='Type First Name...' />
        </div>
        <div className='mt-2'>
            <label>Last Name:</label>
            <input type='text' className='form-control' placeholder='Type Last Name...' />
        </div>

        <div className='mt-2'>
            <label>Email:</label>
            <input type='email' className='form-control' placeholder='Type Email...' />
        </div>
        <div className='mt-2'>
            <label>Password:</label>
            <input type='password' className='form-control' placeholder='Type Password...' />
        </div>
        <div className='mt-2'>
            <label>Confirm Password:</label>
            <input type='password' className='form-control' placeholder='Confirm Password...' />
        </div>
        <div className='mt-2'>
        <button className='btn-primary btn me-2'>Sign Up</button>
        <button className='btn-dark btn me-2'>Back</button>

        </div>
        </form>
  
    </div>
  )
}

export default SignUp