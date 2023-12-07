import React from "react";
import './style.css';
import img1 from './logo.svg';
import { useState } from "react";


const ZoomMeeting = ({agfgfbc}) =>{
const [name,setName]= useState();
const [password,setPassword]= useState();

const save =(e)=>{  
  e.preventDefault();
  let data={
      name:name,
      password:password 
    }
    console.log(data)
}

return(
<>
<h1>This is My first Crud! {agfgfbc}</h1>
<img src={img1} width={100}/>
<form onSubmit={save}>
<div className="section">
<label>Enter User : </label>

<input type="text" name="user" onChange={(e) => { setName(e.target.value) }} placeholder="Enter Name" />

</div>
<div className="section">
<label>Enter Pass : </label>
<input type="password" name="pass" onChange={(e) => { setPassword(e.target.value) }} placeholder="Enter Name"/>
</div>
<button style={{'marginTop':'10px'}} type="submit">SAVE</button>
</form>

</>
)
}

export default  ZoomMeeting;