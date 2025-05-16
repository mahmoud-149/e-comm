import React, { useContext, useEffect, useState } from "react";
import { Avatar, Button, Card, Typography } from "@material-tailwind/react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import axios from "axios";
import Store from "../../../context/Store";

const TABLE_HEAD = ["name", "email", "Role", "Action"];

const UsersTable = () => {
  const { allUsers, getAllUsers } = useContext(Store);
  const URL = import.meta.env.VITE_URL;
  const token = localStorage.getItem("token");

  const [gotChange, setGotChange] = useState(false);

  const MakeAdmin = (_id) => {
    const targetUser = allUsers.find((user) => {
      if (user._id == _id) {
        user.role = "admin";
        console.log(user);
        return user;
      }
    });
    saveTheEdit(targetUser._id);
  };

  const saveTheEdit = async (changeduser_id) => {
    try {
      await axios({
        method: "put",
        url: `${URL}/api/users/update/${changeduser_id}`,
        data: { role: "admin" },
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setGotChange(!gotChange);
    } catch (e) {
      console.log(e);
    }
  };

  const handleRemove = (_id) => {
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
        RemoveUser(_id);
      }
    });
  };

  const RemoveUser = async (_id) => {
    try {
      axios({
        method: "delete",
        url: `${URL}/api/users/delete/${_id}`,
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setGotChange(!gotChange);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, [gotChange]);

  return (
    <Card className="h-full w-full overflow-auto bg-HeroText shadow-xl rounded-xl animate-fadeIn">
      <table className="w-full min-w-max table-auto text-center font-MainFont">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-MainButton bg-MainButton/10 p-4"
              >
                <Typography
                  variant="small"
                  className="font-bold text-MainText opacity-80 tracking-wide animate-slideIn"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {allUsers?.map(({ name, email, _id, role }, index) => {
            const isLast = index === allUsers.length - 1;
            const classes = isLast
              ? "p-4"
              : "p-4 border-b border-MainButton/20";

            return (
              <tr
                key={name}
                className="hover:bg-MainButton/5 transition-colors"
              >
                <td className={classes}>
                  <Typography
                    variant="small"
                    className="font-normal text-MainText animate-slideIn"
                  >
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    className="font-normal text-MainText animate-slideIn"
                  >
                    {email}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography className="font-normal text-MainText animate-slideIn">
                    {role}
                  </Typography>
                </td>
                <td className={classes}>
                  <div className="flex gap-2 justify-center">
                    <Link to={`view/${_id}`}>
                      <Button className="bg-MainButton text-HeroText hover:bg-HoverHeroButton hover:text-HeroText rounded-lg font-MainFont text-sm tracking-wide transition-all duration-300 shadow-md animate-slideIn">
                        View
                      </Button>
                    </Link>
                    <Button
                      onClick={() => {
                        handleRemove(_id);
                      }}
                      className="bg-red-600 text-HeroText hover:bg-red-800 hover:text-HeroText rounded-lg font-MainFont text-sm tracking-wide transition-all duration-300 shadow-md animate-slideIn"
                    >
                      Remove
                    </Button>
                    <Button
                      onClick={() => {
                        MakeAdmin(_id);
                      }}
                      className="bg-green-600 text-HeroText hover:bg-green-800 hover:text-HeroText rounded-lg font-MainFont text-sm tracking-wide transition-all duration-300 shadow-md animate-slideIn disabled:bg-gray-400 disabled:text-HeroText disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={role === "admin"}
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
