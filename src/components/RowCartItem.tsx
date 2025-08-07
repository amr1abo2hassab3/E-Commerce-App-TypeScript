import Div from "./ui/Div";
import Input from "./ui/Input";
import Span from "./ui/Span";
import Button from "./ui/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import type { CartValues, Product } from "../interfaces/cartInterfaces";
import { useState } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../app/store";
import { updateQuntity } from "../app/features/CartSlice/actions/updateQuntity";
import { toast } from "react-toastify";

interface RowCartItemProps {
  product: Product;
  handleRemoveItem: (productId: CartValues) => void;
}

const RowCartItem = ({ product, handleRemoveItem }: RowCartItemProps) => {
  const [count, setCount] = useState<number>(product.count);
  const dispatch = useDispatch<AppDispatch>();

  const handleUpdatecount = async (newCount: number, id: string) => {
    const resultAction = toast.promise(
      dispatch(updateQuntity({ count: `${newCount}`, productId: id })),
      {
        pending: "updating Quntity ...",
        success: "Item updated successfully!",
        error: "Failed to update .",
      },
      { autoClose: 1500 }
    );
    const result = await resultAction;
    if (result.type.endsWith("fulfilled")) {
      setCount(newCount);
    }
  };

  return (
    <tr className="bg-white transition duration-200 border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="p-4">
        <img
          className="w-16 md:w-32 max-w-full max-h-full rounded"
          src={product.product.imageCover}
          alt={product.product.title}
        />
      </td>
      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        {product.product.title}
      </td>
      <td className="px-6 py-4">
        <Div className="flex items-center">
          <Button
            className="inline-flex cursor-pointer items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            type="button"
            onClick={() => {
              handleUpdatecount(count - 1, product.product._id);
            }}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 2"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h16"
              />
            </svg>
          </Button>
          <Div>
            <Input
              type="number"
              id="first_product"
              className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              value={count}
              onBlur={() => handleUpdatecount(count, product.product._id)}
              onChange={(e) => setCount(Number(e.target.value))}
            />
          </Div>
          <Button
            onClick={() => {
              handleUpdatecount(count + 1, product.product._id);
            }}
            className="inline-flex cursor-pointer items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            type="button"
          >
            <Span className="sr-only">Quantity button</Span>
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 1v16M1 9h16"
              />
            </svg>
          </Button>
        </Div>
      </td>
      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        $ {product.price}
      </td>
      <td className="px-6 py-4">
        <Span className="font-medium text-black-500 text-lg cursor-pointer border border-black rounded-md hover:border-red-600 p-2 hover:text-red-600 transition-colors">
          <DeleteIcon
            style={{ cursor: "pointer" }}
            onClick={() => handleRemoveItem({ productId: product.product._id })}
            className="hover:text-red-600 transition-colors"
          />
        </Span>
      </td>
    </tr>
  );
};

export default RowCartItem;
