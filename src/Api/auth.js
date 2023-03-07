import axios from "axios";
const baseUrl="https://dummyjson.com"
export function login(data){
axios.post(`${baseUrl}/auth/login`,data)
// .then(res=>
//    { console.log(res)
//     return res})
//     .catch(err=>{
//         return err
//     })


}