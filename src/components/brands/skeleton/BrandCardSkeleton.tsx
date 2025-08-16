import Div from "../../ui/Div";

export default function BrandCardSkeleton() {
  return (
    <Div
      className={`bg-[#FEFEFE] flex rounded shadow-[0px_10px_30px_rgba(0,0,0,0.2)] border-blue border
      dark:bg-gray-800 dark:shadow-[0px_10px_30px_rgba(255,255,255,0.1)] dark:border-gray-500 animate-pulse`}
    >
      {/* صورة البراند */}
      <Div className="bg-blue w-[25%] h-[100px] flex justify-center items-center rounded"></Div>

      {/* اسم البراند */}
      <Div className="w-[75%] ml-9 flex flex-col justify-center gap-2">
        <Div className="h-5 w-32 bg-gray-200 rounded"></Div>
      </Div>
    </Div>
  );
}
