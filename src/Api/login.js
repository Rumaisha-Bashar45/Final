export default async function loginPost(values){
    let headersList = {
      "Accept": "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/json"
     }
     
     let bodyContent = JSON.stringify(
       {
         
         "username": values.username,
         "password": values.password

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