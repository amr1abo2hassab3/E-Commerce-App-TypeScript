import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Div from "../../ui/Div";
import Button from "../../ui/Button";
import Span from "../../ui/Span";
import { SummaryOrderSkeleton } from "./SummaryOrderSkeleton ";
import { ShipingOrderSkeleton } from "./ShipingOrderSkeleton";

export const OrderDetailsSkeleton = () => {
  return (
    <>
      {/* Skeleton للعنوان */}
      <Div className="mb-4 w-48 h-8 bg-gray-300 rounded animate-pulse mt-5"></Div>
      <Div className="mt-5 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
        <Div className="flex duration-500  p-6 bg-[#C7D5F1] rounded-lg flex-col h-fit justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
          <Div className="flex justify-center flex-col md:flex-row items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
            {/* SummaryOrder Skeleton */}
            <SummaryOrderSkeleton />
            {/* ShippingOrder Skeleton */}
            <ShipingOrderSkeleton />
          </Div>

          {/* الزر */}
          <Button
            disabled
            className="capitalize font-semibold bg-blue-300 text-white p-3 w-full mb-0 flex items-center justify-center"
          >
            <Div className="w-44 h-6 bg-gray-200 rounded animate-pulse"></Div>
            <ExpandMoreIcon className="pl-2 text-lg opacity-50" />
            <Span className="text-red-600 pl-1">
              <Div className="w-6 h-5 bg-gray-200 rounded animate-pulse"></Div>
            </Span>
          </Button>
        </Div>
      </Div>
    </>
  );
};
