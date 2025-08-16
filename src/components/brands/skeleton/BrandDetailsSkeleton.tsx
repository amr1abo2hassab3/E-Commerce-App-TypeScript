import Div from "../../ui/Div";

export default function BrandDetailsSkeleton() {
  return (
    <Div
      className="grid lg:gap-0 gap-3 lg:grid-cols-2 grid-cols-1 items-center justify-center py-[35px] px-[20px] rounded-md 
      bg-[#EDF2FB] dark:bg-gray-800 animate-pulse"
    >
      {/* الجزء النصي */}
      <Div className="text-center">
        {/* العنوان */}
        <Div className="h-14 w-3/4 mx-auto bg-gray-300 rounded mb-6 dark:bg-gray-600"></Div>

        {/* الزر */}
        <Div className="h-12 w-40 mx-auto bg-gray-300 rounded dark:bg-gray-600"></Div>
      </Div>

      {/* الجزء الخاص بالصورة */}
      <Div className="flex items-center justify-center">
        <Div
          className="bg-[#c7d5f1] w-96 h-96 rounded-full flex justify-center items-center 
          dark:bg-gray-700"
        >
          {/* صورة وهمية */}
          <Div className="w-56 h-56 bg-gray-300 rounded-full dark:bg-gray-600"></Div>
        </Div>
      </Div>
    </Div>
  );
}
