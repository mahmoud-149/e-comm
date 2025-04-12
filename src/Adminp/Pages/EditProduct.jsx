import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Textarea,
  Alert,
} from "@material-tailwind/react";
const EditProduct = () => {
  const { id } = useParams();
  const [currentProduct, setCurrentProduct] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
    rating: {
      rate: "",
      count: "",
    },
  });

  const navigate = useNavigate();
  const getTheEdit = async () => {
    const URL = import.meta.env.VITE_URL;
    const req = await axios({
      method: "get",
      url: `${URL}/products/${id}`,
    });
    setCurrentProduct(req.data);
    // console.log(req.data);
  };
  const postTheEdit = () => {
    try {
      const URL = import.meta.env.VITE_URL;

      axios({
        method: "put", //there is put for change all the object and "patch " for only the key
        url: `${URL}/products/${id}`,
        data: currentProduct,
      });
      navigate(-1);
      // console.log("done");
    } catch (e) {
      console.log(e.message);
    }
  };
  useEffect(() => {
    // console.log(currentProduct);
    getTheEdit();
  }, []);

  return (
    <div className="flex items-center justify-center">
      <Card color="transparent" shadow={true} className="p-5">
        <Typography variant="h4" color="blue-gray">
          Edit Product
        </Typography>

        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Title
            </Typography>
            <Input
              size="lg"
              placeholder="name"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => {
                setCurrentProduct({ ...currentProduct, title: e.target.value });
              }}
              value={currentProduct?.title}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              category
            </Typography>
            <Input
              size="lg"
              placeholder="name"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => {
                setCurrentProduct({
                  ...currentProduct,
                  category: e.target.value,
                });
              }}
              value={currentProduct?.category}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Description
            </Typography>
            <Textarea
              size="lg"
              placeholder="descripe"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900  "
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => {
                setCurrentProduct({
                  ...currentProduct,
                  description: e.target.value,
                });
              }}
              value={currentProduct?.description}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Image
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => {
                setCurrentProduct({
                  ...currentProduct,
                  image: e.target.value,
                });
              }}
              value={currentProduct?.image}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Price
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => {
                setCurrentProduct({ ...currentProduct, price: e.target.value });
              }}
              value={currentProduct?.price}
            />
          </div>

          {/*Object.keys(currentProduct).map((x,y)=>{
            return (
              <div key={y} className="flex flex-col gap-4" >
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  {x}
                </Typography>
                <Input
                  size="lg"
                  placeholder="name"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  onChange={(e) => {
                    setCurrentProduct({
                      ...currentProduct,
                      x: e.target.value,
                    });
                  }}
                  value={currentProduct?.x}
                />
              </div>
            );
          })*/}
          <Button
            type="submit"
            className="mt-6"
            fullWidth
            color="blue"
            onClick={postTheEdit}
          >
            Edit
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default EditProduct;
