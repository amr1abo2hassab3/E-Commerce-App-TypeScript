import Div from "../ui/Div";

const PaginationSkeleton = () => {
  return (
    <Div className="flex flex-col md:flex-row justify-between items-center px-4 py-6 gap-4 border-t mt-12 dark:border-gray-700">
      {/* النص + select placeholder */}
      <Div className="text-sm text-gray-700 dark:text-gray-300 flex flex-wrap items-center gap-3 animate-pulse">
        <span className="h-4 w-40 bg-gray-300 dark:bg-gray-600 rounded"></span>
        <span className="h-4 w-24 bg-gray-300 dark:bg-gray-600 rounded ml-4"></span>
        <span className="h-8 w-20 bg-gray-300 dark:bg-gray-600 rounded-md"></span>
      </Div>

      {/* pagination skeleton buttons */}
      <Div className="flex items-center justify-center flex-wrap gap-2 animate-pulse">
        {/* Previous */}
        <span className="w-9 h-9 rounded-md bg-gray-300 dark:bg-gray-600"></span>

        {/* page numbers */}
        {[...Array(5)].map((_, idx) => (
          <span
            key={idx}
            className="w-9 h-9 rounded-md bg-gray-300 dark:bg-gray-600"
          ></span>
        ))}

        {/* Next */}
        <span className="w-9 h-9 rounded-md bg-gray-300 dark:bg-gray-600"></span>
      </Div>
    </Div>
  );
};

export default PaginationSkeleton;
