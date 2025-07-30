import Div from "../ui/Div";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import Img from "../ui/Img";
import type { IProduct } from "../../interfaces/productsInterfaces";
import StarIcon from "@mui/icons-material/Star";
import Button from "../ui/Button";
import { useState } from "react";
import useAddToCart from "../../hooks/useAddToCart";

interface ProductDetailsContentProps {
  product: IProduct;
}

const ProductDetailsContent = ({ product }: ProductDetailsContentProps) => {
  // state
  const handleAddToCart = useAddToCart();

  const [indexImage, setIndexImage] = useState<number>(0);
  return (
    <Div className="max-w-7xl mx-auto px-4 py-16">
      <Div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Image Section */}
        <Div className="flex flex-col justify-center items-center gap-4">
          <Img
            src={product.images[indexImage]}
            alt={product.title}
            className="rounded-md w-full h-[500px] object-cover"
          />

          {/* Thumbnails */}
          <Div className="w-full">
            <Div className="flex flex-wrap gap-1 w-full">
              {product.images.map((img, index: number) => (
                <Img
                  key={index}
                  src={img}
                  alt={`product image ${index + 1}`}
                  onClick={() => setIndexImage(index)}
                  className={`h-44 object-cover border-4 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                    index === indexImage
                      ? "border-blue shadow-md scale-105"
                      : "border-gray-300 dark:border-gray-600"
                  }`}
                />
              ))}
            </Div>
          </Div>
        </Div>

        {/* Details Section */}
        <Div className="flex flex-col gap-6">
          {/* Title & Price */}
          <Div>
            <Heading className="text-4xl dark:text-light font-bold mb-2">
              {product.title}
            </Heading>
            <Paragraph className="text-2xl font-light text-gray-800 dark:text-light">
              ${product.price} USD
            </Paragraph>
          </Div>

          {/* Description */}
          <Div className="flex text-gray-700 dark:text-gray-300 flex-col gap-4 border-t border-b border-gray-200 py-6">
            <Paragraph className="text-xl">{product.description}</Paragraph>
            <Paragraph>
              Category: {product.category?.name} | Brand: {product.brand?.name}
            </Paragraph>
          </Div>

          {/* Subcategories */}
          {product.subcategory?.length > 0 && (
            <Div>
              <Heading
                as="h3"
                className="text-blue font-semibold uppercase mb-2 text-lg"
              >
                Subcategories
              </Heading>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                {product.subcategory.map((sub) => (
                  <li key={sub._id}>{sub.name}</li>
                ))}
              </ul>
            </Div>
          )}

          {/* Product Stats */}
          <Div>
            <Heading className="text-blue font-semibold uppercase mb-2 text-lg">
              Product Info
            </Heading>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                <strong>Sold:</strong> {product.sold}
              </li>
              <li>
                <strong>Rating:</strong> {product.ratingsAverage}
                <StarIcon className="text-yellow-400" />(
                {product.ratingsQuantity} reviews)
              </li>
              <li>
                <strong>Available:</strong> {product.quantity}
              </li>
            </ul>
          </Div>

          {/* Button */}
          <Button
            onClick={(e) => {
              e.preventDefault();
              handleAddToCart({ productId: product._id });
            }}
            className="bg-blue rounded text-light uppercase text-sm py-4 duration-300 cursor-pointer w-full hover:shadow-lg transition transform hover:translate-y-1 mt-6"
          >
            Add to cart
          </Button>

          {/* Shipping Info */}
          <Div className="flex items-center justify-center gap-2 text-gray-600 mt-4">
            <LocalShippingIcon className="text-xl text-blue" />
            <Paragraph>2-3 business days delivery</Paragraph>
          </Div>
        </Div>
      </Div>
    </Div>
  );
};

export default ProductDetailsContent;
