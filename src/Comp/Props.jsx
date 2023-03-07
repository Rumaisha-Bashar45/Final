import React from 'react'
import { useState } from 'react'



import {useContext} from 'react'

// export let userDetail= React.createContext()
let userDetail=React.createContext()
let userPassword=React.createContext()
export function userInfo(){
  return useContext(userDetail)
}
export function userPassDetail(){
  return useContext(userPassword)
}

export default function Props( {children}) {
   
    const [name, setName] = useState("Enter Your Name")
    const [password, setPassword ] = useState("Enter Your Password")
  return (
   
    <userDetail.Provider value={[name, setName]}>

<userPassword.Provider value={[password, setPassword ] }>
{children}
<br />


</userPassword.Provider>



    </userDetail.Provider>
  )
}
