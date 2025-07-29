import Div from "../ui/Div";

const CategorySkeleton = () => {
  return (
    <Div className="w-full animate-pulse px-1">
      <div className="w-full h-60 bg-gray-300 rounded-md" />
      <div className="mt-4 h-4 bg-gray-300 rounded w-2/3 mx-auto" />
    </Div>
  );
};

export default CategorySkeleton;
