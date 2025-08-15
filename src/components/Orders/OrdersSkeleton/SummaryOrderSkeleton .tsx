import Div from "../../ui/Div";

export const SummaryOrderSkeleton = () => {
  return (
    <Div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6 animate-pulse">
      {/* العنوان */}
      <Div className="w-32 h-6 bg-gray-300 dark:bg-gray-600 rounded"></Div>

      {/* Subtotal, Shipping, Tax */}
      <Div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
        {[...Array(3)].map((_, i) => (
          <Div key={i} className="flex justify-between w-full">
            <Div className="w-24 h-4 bg-gray-300 dark:bg-gray-600 rounded"></Div>
            <Div className="w-16 h-4 bg-gray-300 dark:bg-gray-600 rounded"></Div>
          </Div>
        ))}
      </Div>

      {/* Total */}
      <Div className="flex justify-between items-center w-full">
        <Div className="w-20 h-4 bg-gray-300 dark:bg-gray-600 rounded"></Div>
        <Div className="w-16 h-4 bg-gray-300 dark:bg-gray-600 rounded"></Div>
      </Div>

      {/* is paid */}
      <Div className="flex justify-between items-center w-full">
        <Div className="w-20 h-4 bg-gray-300 dark:bg-gray-600 rounded"></Div>
        <Div className="w-10 h-4 bg-gray-300 dark:bg-gray-600 rounded"></Div>
      </Div>

      {/* payment Method Type */}
      <Div className="flex justify-between items-center w-full">
        <Div className="w-36 h-4 bg-gray-300 dark:bg-gray-600 rounded"></Div>
        <Div className="w-20 h-4 bg-gray-300 dark:bg-gray-600 rounded"></Div>
      </Div>

      {/* user */}
      <Div className="flex justify-between items-center w-full">
        <Div className="w-16 h-4 bg-gray-300 dark:bg-gray-600 rounded"></Div>
        <Div className="w-24 h-4 bg-gray-300 dark:bg-gray-600 rounded"></Div>
      </Div>
    </Div>
  );
};
