import Div from "../ui/Div";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import type { Order } from "../../interfaces/orderInterfaces";
import Span from "../ui/Span";

interface SummaryOrderProps {
  order: Order;
}

const SummaryOrder = ({ order }: SummaryOrderProps) => {
  return (
    <Div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
      <Heading
        as="h3"
        className="text-xl dark:text-white font-semibold leading-5 text-gray-800"
      >
        Summary
      </Heading>
      <Div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
        <Div className="flex justify-between w-full">
          <Paragraph className="text-base dark:text-white leading-4 text-gray-800">
            Subtotal
          </Paragraph>
          <Paragraph className="text-base dark:text-gray-300 leading-4 text-gray-600">
            ${order.totalOrderPrice}
          </Paragraph>
        </Div>

        <Div className="flex justify-between items-center w-full">
          <Paragraph className="text-base dark:text-white leading-4 text-gray-800">
            Shipping
          </Paragraph>
          <Paragraph className="text-base dark:text-gray-300 leading-4 text-gray-600">
            ${order.shippingPrice}
          </Paragraph>
        </Div>
        <Div className="flex justify-between items-center w-full">
          <Paragraph className="text-base dark:text-white leading-4 text-gray-800">
            tax Price
          </Paragraph>
          <Paragraph className="text-base dark:text-gray-300 leading-4 text-gray-600">
            ${order.taxPrice}
          </Paragraph>
        </Div>
      </Div>
      <Div className="flex justify-between items-center w-full">
        <Paragraph className="text-base dark:text-white font-semibold leading-4 text-gray-800">
          Total
        </Paragraph>
        <Paragraph className="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">
          ${order.totalOrderPrice + order.taxPrice + order.shippingPrice}{" "}
        </Paragraph>
      </Div>
      <Div className="flex justify-between items-center w-full">
        <Paragraph className="text-base dark:text-white font-semibold leading-4 text-gray-800">
          is paid
        </Paragraph>
        <Paragraph className="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">
          <Span
            className={`font-bold ${
              order.isPaid ? "text-main" : "text-red-600"
            }`}
          >
            {order.isPaid ? "YES" : "NO"}
          </Span>
        </Paragraph>
      </Div>
      <Div className="flex justify-between items-center w-full">
        <Paragraph className="text-base dark:text-white font-semibold leading-4 text-gray-800">
          payment Method Type
        </Paragraph>
        <Paragraph className="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">
          <Span className={`font-bold text-main`}>
            {" "}
            {order.paymentMethodType}
            {order.paymentMethodType == "cash" && (
              <i className="fa-solid fa-sack-dollar pl-2"></i>
            )}
          </Span>
        </Paragraph>
      </Div>
      <Div className="flex justify-between items-center capitalize w-full">
        <Paragraph className="text-base dark:text-white font-semibold leading-4 text-gray-800">
          user
        </Paragraph>
        <Paragraph className="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">
          <Span className={`font-bold  capitalize`}>{order.user.name}</Span>
        </Paragraph>
      </Div>
    </Div>
  );
};

export default SummaryOrder;
