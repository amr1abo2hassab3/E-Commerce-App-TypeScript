import Div from "../../ui/Div";

export const ShipingOrderSkeleton = () => {
  return (
    <Div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6 animate-pulse">
      {/* العنوان */}
      <Div className="w-28 h-6 bg-gray-300 dark:bg-gray-600 rounded"></Div>

      {/* معلومات شركة الشحن */}
      <Div className="flex justify-between items-start w-full">
        <Div className="flex justify-center items-center space-x-4">
          <Div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full"></Div>
          <Div className="flex flex-col space-y-2">
            <Div className="w-32 h-4 bg-gray-300 dark:bg-gray-600 rounded"></Div>
            <Div className="w-28 h-3 bg-gray-300 dark:bg-gray-600 rounded"></Div>
          </Div>
        </Div>
        <Div className="w-16 h-5 bg-gray-300 dark:bg-gray-600 rounded"></Div>
      </Div>

      {/* is Delivered */}
      <Div className="w-full flex justify-between items-center">
        <Div className="w-28 h-4 bg-gray-300 dark:bg-gray-600 rounded"></Div>
        <Div className="w-10 h-4 bg-gray-300 dark:bg-gray-600 rounded"></Div>
      </Div>

      {/* عنوان الشحن */}
      <Div className="w-36 h-5 bg-gray-300 dark:bg-gray-600 rounded"></Div>

      {/* تفاصيل العنوان */}
      {[...Array(3)].map((_, i) => (
        <Div
          key={i}
          className="flex justify-between items-center w-full capitalize"
        >
          <Div className="w-28 h-4 bg-gray-300 dark:bg-gray-600 rounded"></Div>
          <Div className="w-40 h-4 bg-gray-300 dark:bg-gray-600 rounded"></Div>
        </Div>
      ))}
    </Div>
  );
};
