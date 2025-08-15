import type { CartItem } from "../../interfaces/orderInterfaces";
import Div from "../ui/Div";
import Heading from "../ui/Heading";
import Img from "../ui/Img";
import Paragraph from "../ui/Paragraph";

interface CardOrderProps {
  product: CartItem;
  index: number;
}

export const CardOrder = ({ product, index }: CardOrderProps) => {
  return (
    <Div className="mt-4 font-bold md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
      <Div className="pb-4 md:pb-8 w-full md:w-40">
        <Img
          className="w-full hidden md:block"
          src={product?.product?.imageCover}
          alt="dress"
        />
        <Img
          className="w-full md:hidden"
          src={product?.product?.imageCover}
          alt="dress"
        />
      </Div>
      <Div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
        <Div className="w-full flex flex-col justify-start items-start space-y-8">
          <Heading
            as="h3"
            className="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800"
          >
            {product?.product?.title}
          </Heading>
        </Div>
        <Div className="flex justify-between space-x-8 items-start w-full">
          <Paragraph className="text-base dark:text-white xl:text-lg leading-6">
            ${product.price * product.count}
          </Paragraph>
          <Paragraph className="text-base dark:text-white xl:text-lg leading-6 text-gray-800">
            quantity <span className="text-red-500"> {product.count}</span>
          </Paragraph>
          <Paragraph className="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">
            {index < 9 && index >= 0 ? `0${index + 1}` : index + 1}
          </Paragraph>
        </Div>
      </Div>
    </Div>
  );
};
