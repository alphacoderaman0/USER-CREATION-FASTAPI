"use client"
import { useState , useEffect} from "react";
export default function Table(){
    
    const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("http://localhost:8000/get-users");
      const data = await res.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);
  
    return(
      <>    
        <table className="my-4 w-full">
          <tbody>
            <tr className=" border-t-0 border-r-0 border-l-0 border-2" >
                <th className="uppercase py-2 font-bold">name</th>
                <th className="uppercase py-2 font-bold">email</th>
                <th className="uppercase font-bold">phone number</th>
            </tr>
              
            {users?.map((user, index) => (
              <tr key={index}  className="text-center my-6 border-t-0 border-r-0 border-l-0 border-2">
                <td  className="py-3 capitalize">{user.name}</td>
                <td  className="py-3">{user.email}</td>
                <td className="">{user.mobno}</td>
              </tr>            
              ))
              }
          </tbody>
        </table>
      </>
    
    );
}