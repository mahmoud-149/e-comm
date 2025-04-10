import { useState } from "react";
import {
  Card,
  CardBody,
  Typography,
  Button,
  Rating,
  Input,
  IconButton,
} from "@material-tailwind/react";
import { GiShoppingBag } from "react-icons/gi";

const ProductDetails = ({ product, addToCart, onClose }) => {
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity: quantity,
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-end p-4">
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={onClose}
            className="text-2xl font-bold"
          >
            ×
          </IconButton>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 p-6">
          {/* Product Image */}
          <div className="lg:w-1/2">
            <div className="bg-white p-4 rounded-xl shadow-md">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-96 object-contain"
              />
            </div>
          </div>

          
          <div className="lg:w-1/2">
            <Card className="shadow-lg">
              <CardBody className="p-6">
                <Typography variant="h2" className="text-2xl font-bold mb-2">
                  {product.title}
                </Typography>

                <div className="flex items-center gap-2 mb-4">
                  <Rating value={Math.floor(product.rating.rate)} readonly />
                  <Typography className="text-sm text-gray-600">
                    ({product.rating.count} reviews)
                  </Typography>
                </div>

                <Typography
                  variant="h3"
                  className="text-3xl font-bold text-blue-600 mb-4"
                >
                  ${product.price.toFixed(2)}
                </Typography>

                <Typography className="text-gray-700 mb-6">
                  {product.description}
                </Typography>

                {/* Quantity Selector */}
                <div className="mb-6">
                  <Typography
                    variant="h6"
                    className="text-sm font-semibold mb-2"
                  >
                    Quantity
                  </Typography>
                  <div className="flex items-center gap-4">
                    <Button
                      variant="outlined"
                      size="sm"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      -
                    </Button>
                    <Input
                      type="number"
                      value={quantity}
                      onChange={(e) =>
                        setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                      }
                      className="w-16 text-center"
                      containerProps={{ className: "min-w-0" }}
                    />
                    <Button
                      variant="outlined"
                      size="sm"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </Button>
                  </div>
                </div>

                
                <Button
                  fullWidth
                  className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 mb-6"
                  onClick={handleAddToCart}
                >
                  <GiShoppingBag size={18} />
                  Add to Cart
                </Button>

                
                <div className="border-t border-gray-200 pt-6">
                  <Typography variant="h5" className="font-semibold mb-2">
                    Product Details
                  </Typography>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
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
