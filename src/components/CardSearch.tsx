import { Link } from "react-router-dom";
import type { IProduct } from "../interfaces/productsInterfaces";
import Div from "./ui/Div";
import Img from "./ui/Img";
import { lazy } from "react";

interface CardSearchProps {
  products: IProduct[];
  keyWord: string;
}

export const CardSearch = ({ products, keyWord }: CardSearchProps) => {
  return (
    <Div
      className={`flex flex-col items-center transition-opacity duration-200   ${
        keyWord.trim() !== "" ? "opacity-100" : "opacity-0"
      }`}
    >
      <Div className="absolute top-[60px] custom-scrollbar max-h-[500px] overflow-auto shadow bg-white dark:bg-gray-800 z-40 w-full left-0 rounded max-h-select overflow-y-auto">
        <Div className="flex flex-col w-full">
          {products && products.length > 0 ? (
            products.map((product) => (
              <Div
                key={product._id}
                className="cursor-pointer w-full border-gray-100 dark:border-gray-700 rounded-t border-b hover:bg-teal-100 dark:hover:bg-teal-900"
              >
                <Link
                  to={`/productDetails/${product._id}`}
                  className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-teal-100 dark:hover:border-teal-400"
                >
                  <Div className="w-6 flex flex-col items-center">
                    <Div className="relative w-5 h-5 bg-orange-500 dark:bg-orange-600 flex justify-center items-center m-1 mr-2 mt-1 rounded-full">
                      <Img
                        className="rounded-full w-full h-full object-cover"
                        alt={product.title}
                        src={product.imageCover}
                        loading="lazy"
                      />
                    </Div>
                  </Div>
                  <Div className="w-full items-center flex">
                    <Div className="mx-2 -mt-1 font-medium text-gray-900 dark:text-gray-200">
                      {product.title}
                      <Div className="text-xs truncate w-full normal-case font-normal -mt-1 text-gray-500 dark:text-gray-400">
                        {product.category.name}
                      </Div>
                    </Div>
                  </Div>
                </Link>
              </Div>
            ))
          ) : (
            <Div className="flex flex-col w-full p-4 font-semibold text-center text-red-600 dark:text-red-400">
              There are no products of the same name
            </Div>
          )}
        </Div>
      </Div>
    </Div>
  );
};
