import React from 'react';
// import { useContext } from 'react';
// import { userDetail } from './App';
// import { userInfo } from '../App';
// import { userPassDetail } from '../App';
import { userInfo } from './Props';
import { userPassDetail } from './Props';
const Context = () => {
    // let [val,setVal]=useContext(userDetail)
    let[val,setVal]=userInfo()
    let[pass,setPass]=userPassDetail()
    return (
        <div>
          
       
         <button onClick={() => setVal((val) => val)}>
         Name: {val}
        </button>
        <br />
        <button onClick={() => setPass((pass) => pass )}>
         Pass: {pass}
        </button>

        
        </div>

        
    );
}

export default Context;
