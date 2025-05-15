import React, { useContext, useEffect, useState } from "react";
import { Avatar, Button, Card, Typography } from "@material-tailwind/react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import axios from "axios";
import Store from "../../../context/Store";

const TABLE_HEAD = ["name", "email", "Id", "Role", "Action"];

const UsersTable = () => {
  const {allUsers,setAllUsers}=useContext(Store)
        const URL = import.meta.env.VITE_URL;

  // const [allUsers, setAllUsers] = useState([]);
    const [gotChange,setGotChange]=useState(false);

  const getAllUsers = async () => {
    // const URL = import.meta.env.VITE_URL;
    const req = await axios({
      method: "get",
      url: `${URL}/api/users`,
    });
    setAllUsers(req.data);
  };

    const MakeAdmin=(id)=>{
      const targetUser=  allUsers.find((user)=>{

            if(user.id==id){
                user.role="admin";            
                return user
            }
            
        })
        saveTheEdit(targetUser.id);
        // console.log(targetUser.id);
        //  setAllUsers(targetUser)
    };

    const saveTheEdit=async (changeduserId)=>{
        // const URL = import.meta.env.VITE_URL;
        try{
           await axios({
             method: "patch", //there is put for change all the object and "patch " for only the key
             url: `${URL}/api/users/${changeduserId}`,
             data: { role: "admin" },
            });
            setGotChange(!gotChange);
        }catch(e){
            console.log(e);
            
        }
        
    }

    const handleRemove = (id) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "The User has been removed.",
            icon: "success",
          });
    
        //   console.log(id);
        RemoveUser(id);
        }
      });
    };

    const RemoveUser=async (id)=>{
        try{    
            axios({
                method:"delete",
                url:`${URL}/api/users/${id}`
            })

            setGotChange(!gotChange)
        }
        catch(e){
            console.log(e.message);
            
        }

    }

  useEffect(() => {
    getAllUsers();
    // console.log("call back end");
    // console.log(gotChange);
    
  }, [gotChange]);



  return (
    <Card className="h-full w-full overflow-auto ">
      <table className="w-full min-w-max table-auto text-center">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {allUsers?.map(({ name, email, id, role }, index) => {
            const isLast = index === allUsers.length - 1;
            const classes = isLast
              ? "p-4 "
              : "p-4 border-b border-blue-gray-50";

            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue"
                    className="font-normal"
                  >
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="red"
                    className="font-normal"
                  >
                    {email}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography>{id}</Typography>
                </td>
                <td className={classes}>
                  <Typography>{role}</Typography>
                </td>
                <td className={classes}>
                  <div className=" flex gap-2 justify-center">
                    <Link to={`view/${id}`}>
                      <Button color="blue">View</Button>
                    </Link>
                    {/* <Link to={`edit/${id}`}>
                      <Button>Edit</Button>
                    </Link> */}

                    <Button
                      onClick={() => {
                        handleRemove(id);
                      }}
                      color="red"
                    >
                      Remove
                    </Button>

                    <Button
                      onClick={() => {
                        // console.log(role);
                        MakeAdmin(id);
                      }}
                      color="green"
                      disabled={role=="admin"}
                    >
                      Make Admin
                    </Button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
};

export default UsersTable;
