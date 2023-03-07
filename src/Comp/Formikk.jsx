import React from 'react'
import loginPost from '../Api/login';
import { useFormik } from 'formik';
import { login } from '../Api/auth';
import * as Yup from "yup";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Formikk() {
  

  const formik = useFormik({
    initialValues: {
      username: 'Enter your name',
      password: 'Enter password',
  
    },
    validationSchema : Yup.object({
     
      username: Yup.string().required("required") .min(6, 'Too Short!')
      .max(20, 'should be less than 20 '),
     password:Yup.string().required("required").min(6, 'Too Short!')
     .max(20, 'should be less than 20 '),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null,2));
      console.log(values,"submitted");
      loginPost(values)//submission
      login(values)//validation
    
      
        toast.success('Success Notification !', {
            position: toast.POSITION.TOP_RIGHT
        });
      

    },
  });
  
  console.log()
  return (
    <div>
     <h1>Login page with formik along with validation</h1>
   
      <form onSubmit={formik.handleSubmit}>
       <label htmlFor="username">First Name</label>
       <br />
       <input
         id="username"
         name="username"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.username}
       /> <br />
       {formik.touched.username&&formik.errors.username &&(
        <span>
{formik.errors.username}
        </span>
       )}
       <br />
       <label htmlFor="password">Password</label>
       <br />
       <input
         id="password"
         name="password"
         type="password"
         onChange={formik.handleChange}
         value={formik.values.password}
       />
     <br />
     {formik.touched.password&&formik.errors.password &&(
        <span>
{formik.errors.password}
        </span>
       )}
       <br />

       <button type="submit">Submit</button>
     </form>

     <ToastContainer />
    </div>
  )
}
