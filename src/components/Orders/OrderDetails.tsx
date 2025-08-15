import { useState } from "react";
import OrderHeading from "./OrderHeading";
import SummaryOrder from "./SummaryOrder";
import ShipingOrder from "./ShipingOrder";
import Div from "../ui/Div";
import Button from "../ui/Button";
import type { Order } from "../../interfaces/orderInterfaces";
import Span from "../ui/Span";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { ProductsOrder } from "./ProductsOrder";

interface OrderDetailsProps {
  order: Order;
}

export const OrderDetails = ({ order }: OrderDetailsProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const products = order?.cartItems;

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <OrderHeading order={order} />
      <Div className="mt-5 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
        <Div className="flex duration-500 p-6 bg-[#C7D5F1] rounded-lg flex-col h-fit justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
          <Div className="flex justify-center flex-col md:flex-row  items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
            <SummaryOrder order={order} />
            <ShipingOrder order={order} />
          </Div>
          <Button
            onClick={handleOpenMenu}
            className="capitalize cursor-pointer font-semibold bg-blue-400 hover:bg-blue duration-300 text-white p-3 w-full mb-0"
          >
            {isOpen ? (
              <>
                hidden ordered products{" "}
                <ExpandLessIcon className="pl-2 text-lg" />
              </>
            ) : (
              <>
                show ordered products{" "}
                <ExpandMoreIcon className="pl-2 text-lg" />
              </>
            )}
            <Span className="text-red-600"> ( {products?.length} )</Span>
          </Button>
          <ProductsOrder isOpen={isOpen} products={products} />
        </Div>
      </Div>
    </>
  );
};
