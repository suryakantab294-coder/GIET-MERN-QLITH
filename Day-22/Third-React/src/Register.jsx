import React, { useState } from 'react'

function Register() {
    let [name,setName] = useState("");
    let [age,setAge] = useState("0");
function handleSubmit(e){
    e.preventDefault()
    localStorage.setItem("user",JSON.stringify({name,age}));

}

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter your name' 
        onChange={(e)=>setName(e.target.value)}
        />
        <input type="number" placeholder='Enter your age'
        onChange={(e)=>setAge(e.target.value)}
        />
        <button type='submit'>Submit</button>
</form>
    </div>
  )
}

export default Register