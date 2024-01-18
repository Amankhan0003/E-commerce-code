
import React, { useState } from 'react'
import axios from "axios";

const Create = () => {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
 
    const handlesubmit=()=>{
        axios.post(
            "https://6577e806197926adf62efbf7.mockapi.io/vscode/croud",
            {
                name:name,email:email
            }
        )
    }
  return (
    <>
 <center>   <h2>Create</h2> 
 </center>
    <form className='container w-25 bg-info'>
    <div className="form-group">
    <label >Name</label>
    <input type="text" className="form-control" onChange={(e)=>setname(e.target.value)}/>
  </div>
  <div className="form-group">
    <label>Email address</label>
    <input type="email" className="form-control"  onChange={(e)=>setemail(e.target.value)}/>
  </div>

  
  <button type="submit" className="btn btn-danger" onClick={handlesubmit}>Submit</button>
</form>

</>
  )
}

export default Create