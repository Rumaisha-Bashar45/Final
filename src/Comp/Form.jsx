import React from 'react'
import { useEffect } from 'react';
import { userInfo } from './Props';
import { userPassDetail } from './Props';
import Context from './Context';

export default function Form({children}) {
  
    let[val,setVal]=userInfo()
    let[pass,setPass]=userPassDetail()
    useEffect(() => {
  console.log(val,"pushed")
  console.log(pass,"pushed")
    }, [val,pass])

    async function SubmitForm(){
      let headersList = {
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "Content-Type": "application/json"
       }
       
       let bodyContent = JSON.stringify(
         {
           
           "username": val,
           "password": pass
         }
       );
       
       let response = await fetch("https://dummyjson.com/auth/login? username:=kminchelle& password=0lelplR", { 
         method: "POST",
         body: bodyContent,
         headers: headersList
       });
       
       let data = await response.text();
       console.log(data);
    }
  return (
    <div>
      <h1> Normal login page without using any library and without validation </h1>
      <Context></Context>
      {children}
      <form onSubmit={()=>{
  event.preventDefault()
  SubmitForm()
  
   
    console.log(val,'submiited')
    console.log(pass,'submitted')

  
   
}}  action="">
        

     <input type="Name" placeholder='Name' value={val} onChange={(event)=>{
  setVal(event.target.value)
    }} />

<br /><br />
<input type="password" placeholder='Password' value={pass} onChange={(event)=>{
    setPass(event.target.value)
    }} />
<br />


 <input type="submit" />
      </form>




      
    </div>
  )
}

// let headersList = {
//   "Accept": "*/*",
//   "User-Agent": "Thunder Client (https://www.thunderclient.com)"
//  }
 
//  let bodyContent = new FormData();
//  bodyContent.append(" username", "kminchelle");
//  bodyContent.append(" password", "0lelplR");
 
//  let response = await fetch("https://dummyjson.com/auth/login", { 
//    method: "POST",
//    body: bodyContent,
//    headers: headersList
//  });
 
//  let data = await response.text();
//  console.log(data);
