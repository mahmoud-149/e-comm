import React, { useContext, useEffect } from "react";
import { Avatar, Button, Card, Typography } from "@material-tailwind/react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import axios from "axios";
import Store from "../../../context/Store";

const TABLE_HEAD = ["Title", "Price", "Image", "Action"];
const token = localStorage.getItem("token");

const deleteProduct = async (_id) => {
  try {
    const URL = import.meta.env.VITE_URL;

    const req = await axios({
      method: "delete",
      url: `${URL}/api/products/${_id}`,
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    return req.status;
  } catch (e) {
    console.log(e);
  }
};

const handleDelete = (_id) => {
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
        text: "Your product has been deleted.",
        icon: "success",
      });

      deleteProduct(_id);
    }
  });
};

const DataTable = () => {
  const { products, getTheProducts } = useContext(Store);

  useEffect(() => {
    getTheProducts();
  }, [products]);

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
          {products.map(({ _id, title, price, image }, index) => {
            const isLast = index === products.length - 1;
            const classes = isLast
              ? "p-4"
              : "p-4 border-b border-MainButton/20";

            return (
              <tr
                key={title}
                className="hover:bg-MainButton/5 transition-colors"
              >
                <td className={classes}>
                  <Typography
                    variant="small"
                    className="font-normal text-MainText animate-slideIn"
                  >
                    {title}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    className="font-normal text-MainText animate-slideIn"
                  >
                    {price}
                  </Typography>
                </td>
                <td className={classes}>
                  <Avatar src={image} className="mx-auto animate-slideIn" />
                </td>
                <td className={classes}>
                  <div className="flex gap-2 justify-center">
                    <Link to={`view/${_id}`}>
                      <Button className="bg-MainButton text-HeroText hover:bg-HoverHeroButton hover:text-HeroText rounded-lg font-MainFont text-sm tracking-wide transition-all duration-300 shadow-md animate-slideIn">
                        View
                      </Button>
                    </Link>
                    <Link to={`edit/${_id}`}>
                      <Button className="bg-MainButton text-HeroText hover:bg-HoverHeroButton hover:text-HeroText rounded-lg font-MainFont text-sm tracking-wide transition-all duration-300 shadow-md animate-slideIn">
                        Edit
                      </Button>
                    </Link>
                    <Link>
                      <Button
                        onClick={() => {
                          handleDelete(_id);
                        }}
                        className="bg-red-600 text-HeroText hover:bg-red-800 hover:text-HeroText rounded-lg font-MainFont text-sm tracking-wide transition-all duration-300 shadow-md animate-slideIn"
                      >
                        Delete
                      </Button>
                    </Link>
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

export default DataTable;
