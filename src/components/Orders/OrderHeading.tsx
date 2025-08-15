import type { Order } from "../../interfaces/orderInterfaces";
import Div from "../ui/Div";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";

interface OrderHeadingProps {
  order: Order;
}

const OrderHeading = ({ order }: OrderHeadingProps) => {
  const date = new Date(order.createdAt);

  return (
    <Div className="flex justify-start item-start space-y-2 mt-12 flex-col">
      <Heading
        as="h1"
        className="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800"
      >
        Order : {order.id}
      </Heading>
      <Paragraph className="text-base dark:text-gray-300 font-bold  leading-6 text-gray-600">
        {date.toLocaleString()}
      </Paragraph>
    </Div>
  );
};

export default OrderHeading;
