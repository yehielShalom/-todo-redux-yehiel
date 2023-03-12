import React, { useState } from 'react'
import {useForm} from 'react-hook-form'



const SignUp = () => {  
    const {getValues,register,handleSubmit,formState: {errors}} = useForm()
    const onSub = (_bodyData) =>{
console.log(_bodyData)
        }
        console.log(errors);
        const [toggle,setToggle] = useState(false)
        const regexAlphabet = /^[a-zA-Z\s]+$/;
        const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
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
            <input {...register('firstName',
            {required:{value:true,message:"first name is required..."}
            ,minLength:{value:2,message:"min 2 char..."},
            maxLength:{value:20,message:"max 20 chars"},
            pattern:{value:regexAlphabet,message:"only alphabet allowed.."}})} 
            type='text' className='form-control' placeholder='Type First Name...' />
            {errors.firstName && <p className='m-0 text-danger'>{errors.firstName.message}</p>}
        </div>
        <div className='mt-2'>
            <label>Last Name:</label>
            <input {...register('lastName',{required:{value:true,message:"last name is required..."},
            minLength:{value:2,message:"min 2 char..."},
            maxLength:{value:20,message:"max 20 chars"},
            pattern:{value:regexAlphabet,message:"only alphabet allowed.."}})}
            type='text' className='form-control' placeholder='Type Last Name...' />
            {errors.lastName && <p className='m-0 text-danger'>{errors.lastName.message}</p>}
        </div>

        <div className='mt-2'>
            <label>Email:</label>
            <input {...register('Email',{required:{value:true, message:"Email its empty"},
            pattern:{value:regexEmail,message:"u have @"}})}
             type='email' className='form-control' placeholder='Type Email...' />
             {errors.Email && <p className='m-0 text-danger'>{errors.Email.message}</p>}
        </div>
        <div className='mt-2'>
            <label>Password:</label>
            <input {...register('Password',{required:{value:true , message:"Password is empty!"},
            minLength:{value:5,message:"min 5 char..."},
            maxLength:{value:20,message:"max 20 chars"},
            })}
            type={!toggle? 'password' : 'text'} className='form-control' placeholder='Type Password...' />
            {errors.Password && <p className='m-0 text-danger'>{errors.Password.message}</p>}
        </div>
        <div className='mt-2'>
            <label>Confirm Password:</label>
            <input {...register('ConfrimPassword',{required:{value:true , message:"Confirm Password is empty!"},
            validate:{value:(val)=> getValues('password') == val || "password do not match"}
            }
            )}
             type={!toggle? 'password' : 'text'} className='form-control' placeholder='Confirm Password...' />
             {errors.ConfrimPassword && <p className='m-0 text-danger'>{errors.ConfrimPassword.message}</p>}
        </div>
        <div className='mt-3'>
            <input style={{border:'gray 2px solid',borderRadius:'50%'}}
            onClick = {()=>setToggle(!toggle)}
            type = "checkbox" className='form-check-input me-2'
            />
            <label>{!toggle ? 'show' : 'hide'} password</label>
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