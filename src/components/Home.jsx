import React, { useRef, useState } from 'react'

const Home = () => {
    const [email,setEmail] = useState('');
    const [state,setState] = useState('');
    const emailRef = useRef()
    const stateRef = useRef()

  return (
    <div className='d-flex flex-column align-items-center pt-5 '>
        <h1 className='text-center'>Party Invation</h1>
        <div className='col-md-4 col-10'>
            <input ref={emailRef} placeholder='Enter Your Email...' type="email" className='form-control' />
            <select ref={stateRef} className='form-select mt-2' >
                <option value="" disabled>Choose Your State...</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Canada">Canada</option>
                <option value="France">France</option>
                <option value="Germany">Germany</option>
                <option value="India">India</option>
                <option value="Japan">Japan</option>
                <option value="Spain">Spain</option>
                <option value="Russia">Russia</option>

            </select>
            <button onClick={()=>{
                setEmail(emailRef.current.value)
                setState(stateRef.current.value)
            }} className='btn btn-secondary mt-2'>Send</button>

        </div>
       
        
        {email && state && <div className='border shadow-lg p-2 mt-5'>
            <h5 className='m-0'>Your Invation:</h5>
            <p className='m-0'>Location: {state}</p>
            <p className='m-0'>More Properties will send in your email to : {email}</p>
            <div>
            <button className='btn btn-primary badge mt-2'>More info...</button>
            <button onClick={()=>{
                setEmail('')
                setState('')
                emailRef.current.value = ''
            }} className='btn btn-danger badge mx-2'>Reset</button>
            </div>
            </div>}
            
    </div>
  )
}

export default Home