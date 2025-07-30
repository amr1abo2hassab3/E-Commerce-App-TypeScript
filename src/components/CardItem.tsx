import { Link } from "react-router-dom";
import type { IProduct } from "../interfaces/productsInterfaces";
import Img from "./ui/Img";
import Button from "./ui/Button";
import Span from "./ui/Span";
import Div from "./ui/Div";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import Heading from "./ui/Heading";
import useAddToCart from "./../hooks/useAddToCart";

interface CardItemProps {
  product: IProduct;
  color: string;
}

const CardItem = ({ product, color = "bg-blue" }: CardItemProps) => {
  const handleAddToCart = useAddToCart();

  return (
    <Link
      to={`/productDetails/${product._id}`}
      className={`w-full min-h-115 shadow-lg  relative shadow-custom rounded-md transition-all duration-300 ease-in-out cursor-pointer overflow-hidden hover:rotate-[3deg] hover:scale-[0.90] dark:bg-gray-800`}
    >
      {/* Favorite Icon */}
      <Div className="absolute transition duration-200 group flex items-center justify-center top-4 right-4 w-[50px] h-[50px] bg-[#C7D5F1] rounded-full dark:bg-gray-700">
        <FavoriteIcon className=" dark:text-light text-dark transition duration-300 group-hover:text-red-600 text-xl" />
      </Div>

      {/* Product Image */}
      <Div
        style={{ background: color }}
        className={`flex justify-center items-center p-3 dark:bg-gray-900 `}
      >
        <Img
          src={product.imageCover}
          alt={product.title}
          className="max-w-full"
          loading="lazy"
        />
      </Div>

      {/* Product Info */}
      <Div className="p-4 min-h-[130px] dark:text-white ">
        <Heading className="text-lg mb-2 font-extrabold capitalize">
          {product.title.split(" ").slice(0, 2).join(" ")}
        </Heading>
        <Heading
          as="h3"
          className="text-lg mb-2 font-bold capitalize dark:text-gray-300"
        >
          {product.category.name}
        </Heading>

        {/* Price */}
        <Div className="flex items-center justify-between my-2">
          <Span className="text-gray-700 font-bold dark:text-gray-300">
            {product.priceAfterDiscount ? (
              <>
                ${product.priceAfterDiscount}
                <Span className="line-through text-red-500 dark:text-red-400 ml-2 text-sm">
                  ${product.price}
                </Span>
              </>
            ) : (
              <>${product.price}</>
            )}
          </Span>
        </Div>

        {/* Actions */}
        <Div className="flex items-center justify-between mt-5">
          <Button
            onClick={(e) => {
              e.preventDefault();
              handleAddToCart({ productId: product._id });
            }}
            className="bg-blue text-white py-1.5 px-4 text-sm rounded-md transition-all duration-300 font-bold border border-transparent hover:!bg-white hover:!text-black hover:!border-blue cursor-pointer dark:hover:bg-white dark:hover:text-black"
          >
            Add to cart <i className="fa-solid fa-cart-shopping"></i>
          </Button>
          <Span className="text-gray-700 font-bold dark:text-yellow-400">
            {product.ratingsAverage}
            <StarIcon className="" />
          </Span>
        </Div>
      </Div>
    </Link>
  );
};

export default CardItem;
