import type { Order } from "../../interfaces/orderInterfaces";
import Div from "../ui/Div";
import Heading from "../ui/Heading";
import Img from "../ui/Img";
import Paragraph from "../ui/Paragraph";
import Span from "../ui/Span";

interface ShipingOrderProps {
  order: Order;
}

const ShipingOrder = ({ order }: ShipingOrderProps) => {
  return (
    <Div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
      <Heading
        as="h3"
        className="text-xl dark:text-white font-semibold leading-5 text-gray-800"
      >
        Shipping
      </Heading>
      <Div className="flex justify-between items-start w-full">
        <Div className="flex justify-center items-center space-x-4">
          <Div className="w-8 h-8">
            <Img
              className="w-full h-full"
              alt="logo"
              src="https://i.ibb.co/L8KSdNQ/image-3.png"
            />
          </Div>
          <Div className="flex flex-col justify-start items-center">
            <p className="text-lg leading-6 dark:text-white font-semibold text-gray-800">
              DPD Delivery
              <br />
              <span className="font-normal">Delivery with 24 Hours</span>
            </p>
          </Div>
        </Div>
        <p className="text-lg font-semibold leading-6 dark:text-white text-gray-800">
          ${order.shippingPrice}
        </p>
      </Div>
      <Div className="w-full ">
        <Paragraph className="capitalize py-1 flex justify-between items-center w-full">
          {" "}
          <Span className="font-semibold dark:text-light">is Delivered : </Span>
          <Span
            className={`font-bold ${
              order.isDelivered ? "text-main" : "text-red-600"
            }`}
          >
            {order.isDelivered ? "YES" : "NO"}
          </Span>
        </Paragraph>
      </Div>
      <Heading as="h3" className="font-semibold capitalize text-red-400">
        {" "}
        shipping Address :
      </Heading>
      <Div className="flex justify-between items-center w-full capitalize">
        <Paragraph className="text-base font-semibold dark:text-white leading-4 text-gray-800">
          City :
        </Paragraph>
        <Paragraph className="text-base font-semibold dark:text-gray-300 leading-4 text-gray-600">
          {order.shippingAddress.city}
        </Paragraph>
      </Div>
      <Div className="flex justify-between items-center w-full capitalize">
        <Paragraph className="text-base font-semibold dark:text-white leading-4 text-gray-800">
          Address :
        </Paragraph>
        <Paragraph className="text-base font-semibold  dark:text-gray-300 leading-4 text-gray-600">
          {order.shippingAddress.details}
        </Paragraph>
      </Div>
      <Div className="flex justify-between items-center w-full capitalize">
        <Paragraph className="text-base font-semibold dark:text-white leading-4 text-gray-800">
          phone comunication :
        </Paragraph>
        <Paragraph className="text-base font-semibold  dark:text-gray-300 leading-4 text-gray-600">
          {order.shippingAddress.phone}
        </Paragraph>
      </Div>
    </Div>
  );
};

export default ShipingOrder;
