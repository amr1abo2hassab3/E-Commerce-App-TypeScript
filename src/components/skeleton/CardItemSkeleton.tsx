import Div from "../ui/Div";

const CardItemSkeleton = () => {
  return (
    <Div className="w-full min-h-115 animate-pulse shadow-custom rounded-md overflow-hidden bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out">
      {/* Favorite Icon Placeholder */}
      <Div className="absolute top-4 right-4 w-[50px] h-[50px] bg-gray-300 dark:bg-gray-700 rounded-full" />

      {/* Product Image Placeholder */}
      <Div className="flex justify-center items-center p-3 bg-gray-300 dark:bg-gray-900 h-[200px]">
        <Div className="w-32 h-32 bg-gray-400 dark:bg-gray-700 rounded-md" />
      </Div>

      {/* Product Info Placeholder */}
      <Div className="p-4 min-h-[130px]">
        {/* Title */}
        <Div className="h-5 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-2"></Div>

        {/* Category */}
        <Div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2 mb-2"></Div>

        {/* Price */}
        <Div className="flex items-center justify-between my-2">
          <Div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/3"></Div>
        </Div>

        {/* Actions */}
        <Div className="flex items-center justify-between mt-5">
          <Div className="h-9 w-24 bg-gray-400 dark:bg-gray-600 rounded-md"></Div>
          <Div className="h-4 w-10 bg-gray-300 dark:bg-gray-700 rounded"></Div>
        </Div>
      </Div>
    </Div>
  );
};

export default CardItemSkeleton;
