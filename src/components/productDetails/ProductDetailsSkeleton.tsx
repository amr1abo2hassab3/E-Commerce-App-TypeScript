import Div from "../ui/Div";

const ProductDetailsSkeleton = () => {
  return (
    <Div className="max-w-7xl mx-auto px-4 py-16 animate-pulse">
      <Div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Image Section */}
        <Div className="flex flex-col gap-4">
          <Div className="bg-gray-300 dark:bg-gray-700 w-full h-[500px] rounded-md" />
          <Div className="flex flex-wrap gap-2 w-full">
            {Array.from({ length: 5 }).map((_, idx) => (
              <Div
                key={idx}
                className="w-24 h-24 bg-gray-300 dark:bg-gray-700 rounded-lg"
              />
            ))}
          </Div>
        </Div>

        {/* Details Section */}
        <Div className="flex flex-col gap-6">
          {/* Title & Price */}
          <Div className="space-y-2">
            <Div className="h-8 bg-gray-300 dark:bg-gray-700 w-2/3 rounded" />
            <Div className="h-6 bg-gray-300 dark:bg-gray-700 w-1/4 rounded" />
          </Div>

          {/* Description */}
          <Div className="space-y-3 border-y py-6 border-gray-200 dark:border-gray-600">
            <Div className="h-5 bg-gray-300 dark:bg-gray-700 w-full rounded" />
            <Div className="h-5 bg-gray-300 dark:bg-gray-700 w-1/2 rounded" />
          </Div>

          {/* Subcategories */}
          <Div className="space-y-2">
            <Div className="h-5 bg-gray-300 dark:bg-gray-700 w-1/3 rounded" />
            <Div className="h-4 bg-gray-300 dark:bg-gray-700 w-1/4 rounded" />
            <Div className="h-4 bg-gray-300 dark:bg-gray-700 w-1/5 rounded" />
          </Div>

          {/* Stats */}
          <Div className="space-y-3">
            <Div className="h-5 bg-gray-300 dark:bg-gray-700 w-1/3 rounded" />
            <Div className="h-4 bg-gray-300 dark:bg-gray-700 w-1/2 rounded" />
            <Div className="h-4 bg-gray-300 dark:bg-gray-700 w-1/4 rounded" />
          </Div>

          {/* Button */}
          <Div className="bg-gray-300 dark:bg-gray-700 h-12 w-full rounded mt-6" />

          {/* Shipping Info */}
          <Div className="flex items-center justify-center gap-2 mt-4">
            <Div className="h-5 w-5 bg-gray-300 dark:bg-gray-700 rounded-full" />
            <Div className="h-4 w-40 bg-gray-300 dark:bg-gray-700 rounded" />
          </Div>
        </Div>
      </Div>
    </Div>
  );
};

export default ProductDetailsSkeleton;
