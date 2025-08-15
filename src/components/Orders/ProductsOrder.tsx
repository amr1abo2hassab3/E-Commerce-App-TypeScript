import type { CartItem } from "../../interfaces/orderInterfaces";
import Div from "../ui/Div";
import Paragraph from "../ui/Paragraph";
import { CardOrder } from "./CardOrder";

interface ProductsOrderProps {
  isOpen: boolean;
  products: CartItem[];
}

export const ProductsOrder = ({ isOpen, products }: ProductsOrderProps) => {
  return (
    <Div
      className={`flex overflow-hidden my-3 ${
        !isOpen && "h-0 !p-0 !m-0"
      } flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full`}
    >
      <Paragraph className="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">
        Customer’s Cart
      </Paragraph>
      {products.map((prodcut, index) => (
        <CardOrder key={prodcut._id} product={prodcut} index={index} />
      ))}
    </Div>
  );
};
