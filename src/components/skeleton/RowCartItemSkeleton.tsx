import Div from "../ui/Div";

const RowCartItemSkeleton = () => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 animate-pulse">
      <td className="p-4">
        <Div className="w-16 md:w-32 h-20 bg-gray-300 dark:bg-gray-600 rounded" />
      </td>
      <td className="px-6 py-4">
        <Div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-32" />
      </td>
      <td className="px-6 py-4">
        <Div className="flex items-center space-x-2">
          <Div className="h-6 w-6 bg-gray-300 dark:bg-gray-600 rounded-full" />
          <Div className="h-6 w-14 bg-gray-300 dark:bg-gray-600 rounded" />
          <Div className="h-6 w-6 bg-gray-300 dark:bg-gray-600 rounded-full" />
        </Div>
      </td>
      <td className="px-6 py-4">
        <Div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-20" />
      </td>
      <td className="px-6 py-4">
        <Div className="h-8 w-8 bg-gray-300 dark:bg-gray-600 rounded-full" />
      </td>
    </tr>
  );
};

export default RowCartItemSkeleton;
