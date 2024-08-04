import React, { useState } from 'react'

const FullnameDisplay = () => {
    const [firstname,setFirstname]=useState('');
    const [lastname,setLastname]=useState('');
    const [flag,setFlag]=useState(false);
    const handleChange1=(e)=>{
        setFlag(false)
        setFirstname(e.target.value)
    }
    const handleChange2=(e)=>{
        setFlag(false)
        setLastname(e.target.value)
    }
    const handleSubmit=(e)=>{
        setFlag(true)
        e.preventDefault();
    }
  return (
    <div>
        <h1>Display Full Name</h1>
        <form onSubmit={handleSubmit}>
            <div>
        <label>First Name</label>
        <input type="text" required onChange={handleChange1}/>
        </div>
        <div>
        <label>Last Name</label>
        <input type="text" required onChange={handleChange2}/>
        </div>
        <div>
        <button type='submit' >Submit</button>
        </div>
        {flag?
        <span>Full Name:
        {firstname}{" "}{lastname}</span>:""
        }
        </form>
    </div>
  )
}

export default FullnameDisplay