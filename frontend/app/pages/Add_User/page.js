"use client"
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Add_User() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobno: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if(formData.name.length <=2){
              alert("Name must be of 3 or More Character");
            }
            else if(formData.name == parseInt(formData.name)){
              alert("Number not Allowed in Name Field");
            }
            else if(formData.mobno.length <=9 || formData.mobno.length > 10){
              alert("Mobile Number must be of 10 Digit");
            }
            else{
                const res = await fetch("http://localhost:8000/create-user", {
                    method: "POST",
                    headers: {
                    "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                });
                const data = await res.json();
                alert(data.message);
                router.push('/')
            }
        } catch (error) {
            alert("Error creating user");
        }
    };

  return (
    <>
    {/* <div>
      <h1>Create User</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="mobile"
          value={formData.mobno}
          onChange={(e) =>
            setFormData({ ...formData, mobno: e.target.value })
          }
        />
        <button type="submit">Create User</button>
      </form>
    </div> */}
    <div className="px-60 flex  justify-center items-center h-[100vh]">
     <div className="w-[500px] bg-white px-6 py-6 border rounded-xl shadow-lg hover:shadow-xl">
        <h1 className="text-3xl text-center font-bold uppercase">Add New user</h1>
         
          {/* form starts */}
          <form onSubmit={handleSubmit} className="my-2 space-y-5 ">
          {/* input starts */}
            <div>
              <label htmlFor="name"className="block mb-2 text-lg font-medium text-gray-900 ">Name</label>
              <input onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })} value={formData.name} name="name" type="text" id="name" className="block p-3 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="Enter your Name" required/>
            </div>
            
            <div>
              <label htmlFor="email"className="block mb-2 text-lg font-medium text-gray-900 ">Email</label>
              <input onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })} value={formData.email} name="email" type="email" id="email" className="block p-3 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="Enter your Email" required/>
            </div>
            <div>
              <label htmlFor="mobno"className="block mb-2 text-lg font-medium text-gray-900 ">Phone Number</label>
              <input onChange={(e) =>
            setFormData({ ...formData, mobno: e.target.value })} value={formData.mobno} name="mobno" type="number" id="mobno" className="block p-3 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="Enter your Phone Number (only 10 digits)" required/>
            </div>
            
            {/* input ends */}

            {/* buttons starts */}
            <div className="flex justify-between">
              <Link
              href="/"
              className="py-3 px-5 text-md font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 uppercase"
              >
              back
              </Link>
              <input
              type="submit"
              className="py-3 px-5 text-md font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 uppercase addCancel" value="add"/>
            </div>
           {/* buttons ends */}
          </form>
          {/* form ends */}
      </div>
    </div>
    </>
  );
}


  
//   //   add user function starts
//   const router = useRouter();
//   const [message , setMessage] = useState('');
//   const [error , setError] = useState('');
//   const [saveUser,setSaveUser] = useState({
//     name: "",
//     age:"",
//     mobno: ""
//   })
//   const handleSaveChanges = ({target :{name,value}})=>{
//     setSaveUser({...saveUser , [name] : value});
//   }
//   const handleAddSubmit= async (e)=>{
//     e.preventDefault();
//     try {
//       if(saveUser.name.length <=2){
//         setError("Name must be of 3 or More Character");
//       }
//       else if(saveUser.name == parseInt(saveUser.name)){
//         setError("Number not Allowed in Name Field");
//       }
//       else if(saveUser.age <=17){
//         setError("Age must be of 18 or More");
//       }
//       else if(saveUser.mobno.length <=9){
//         setError("Mobile Number must be of 10 Digit");
//       }
//       else{
//         const response = await fetch("http://localhost:3000/api/user",{
//           method : "POST",
//           headers : {"Content-Type": "application/json"},
//           body: JSON.stringify(saveUser)
//         });
//           await response.json();
//       setMessage(` User added Successfully`);
//           setTimeout(navigate, 3000);
//           function navigate() {
//             window.location.href = '/';
//           }
//       }  
//     } catch (error) {
//       setError(`error:${error}`);
//     }
//   }
//   //add user function ends
//   return (
//     
//   );
// }
