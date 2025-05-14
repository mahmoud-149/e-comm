/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  Card,
  CardBody,
  Typography,
  Button,
  Input,
  IconButton,
} from "@material-tailwind/react";
import { GiShoppingBag } from "react-icons/gi";

const ProductDetails = ({ product, addToCart, onClose }) => {
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      ...product,
      quantity: quantity,
    });
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl w-[95vw] max-w-4xl max-h-[95vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white z-10 p-2 sm:p-4 flex justify-end">
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={onClose}
            className="text-2xl"
          >
            ×
          </IconButton>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 sm:gap-8 p-4 sm:p-6">
          <div className="w-full lg:w-1/2">
            <div className="bg-white p-2 sm:p-4 rounded-xl">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-auto max-h-[50vh] object-contain mx-auto"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <Card className="shadow-none">
              <CardBody className="p-2 sm:p-4">
                <Typography
                  variant="h2"
                  className="text-xl sm:text-2xl font-bold mb-2"
                >
                  {product.title}
                </Typography>

                <div className="flex items-center gap-2 mb-3">
                  {
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating.rate)
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  }
                  <Typography className="text-sm text-gray-600">
                    ({product.rating.count} reviews)
                  </Typography>
                </div>

                <Typography
                  variant="h3"
                  className="text-2xl sm:text-3xl font-bold text-blue-600 mb-3"
                >
                  ${product.price.toFixed(2)}
                </Typography>

                <Typography className="text-sm sm:text-base text-gray-700 mb-4">
                  {product.description}
                </Typography>

                <div className="mb-4">
                  <Typography
                    variant="h6"
                    className="text-sm font-semibold mb-2"
                  >
                    Quantity
                  </Typography>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outlined"
                      size="sm"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setQuantity(Math.max(1, quantity - 1));
                      }}
                      className="min-w-[40px]"
                    >
                      -
                    </Button>
                    <Input
                      disabled
                      type="number"
                      value={quantity}
                      onChange={(e) => {
                        e.stopPropagation();
                        setQuantity(Math.max(1, parseInt(e.target.value) || 1));
                      }}
                      className="w-16 text-center"
                      containerProps={{ className: "min-w-0" }}
                    />
                    <Button
                      variant="outlined"
                      size="sm"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setQuantity(quantity + 1);
                      }}
                      className="min-w-[40px]"
                    >
                      +
                    </Button>
                  </div>
                </div>

                <Button
                  fullWidth
                  className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 mb-4 py-3"
                  onClick={handleAddToCart}
                >
                  <GiShoppingBag size={18} />
                  Add to Cart
                </Button>

                <div className="border-t border-gray-200 pt-4">
                  <Typography
                    variant="h5"
                    className="text-sm sm:text-base font-semibold mb-2"
                  >
                    Product Details
                  </Typography>
                  <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                    <li>Free shipping on all orders</li>
                    <li>30-day return policy</li>
                    <li>Secure checkout</li>
                  </ul>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
