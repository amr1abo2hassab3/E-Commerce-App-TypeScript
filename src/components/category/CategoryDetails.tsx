import { Link, useParams } from "react-router-dom";
import useGetDataQuery from "../../hooks/useGetDataQuery";
import type { Category } from "../../interfaces/productsInterfaces";
import BrandDetailsSkeleton from "../brands/skeleton/BrandDetailsSkeleton";
import Div from "../ui/Div";
import Heading from "../ui/Heading";
import Img from "../ui/Img";
import { NewCollection } from "../home/NewCollection";

export const CategoryDetails = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading } = useGetDataQuery<{ data: Category }>({
    queryKey: ["getCategroyDetails", id || ""],
    url: `/api/v1/categories/${id}`,
  });

  const dataDetails = data?.data;

  return (
    <Div className="container mx-auto my-16">
      {isLoading ? (
        <BrandDetailsSkeleton />
      ) : (
        <Div
          className="grid lg:gap-0 gap-3 lg:grid-cols-2 grid-cols-1 items-center justify-center py-[35px] px-[20px] rounded-md 
    bg-[#EDF2FB] dark:bg-gray-800"
        >
          <Div className="text-center">
            <Heading className="text-[60px] uppercase font-semibold dark:text-white">
              {dataDetails?.name}
            </Heading>
            <Link
              className="bg-blue inline-block mt-4 hover:text-black hover:!border-blue border-[1px] hover:!bg-white py-[14px] px-10 rounded text-white font-bold transition-all duration-300 border-transparent"
              to={"/products"}
            >
              shop now
            </Link>
          </Div>

          <Div className="flex items-center justify-center group">
            <Div
              className="bg-[#c7d5f1] hover:shadow-[0px_20px_50px_rgba(0,0,0,0.2)] w-96 h-96 rounded-full flex justify-center items-center 
        transition-all duration-300 cursor-pointer dark:bg-gray-700 dark:shadow-[0px_20px_50px_rgba(255,255,255,0.1)]"
            >
              <Img
                className="w-56 group-hover:scale-105 group-hover:rotate-6 transition-transform duration-300"
                src={dataDetails?.image}
                alt={dataDetails?.name}
              />
            </Div>
          </Div>
        </Div>
      )}

      {dataDetails && (
        <NewCollection
          notFound={true}
          idCategory={dataDetails?._id}
          category={dataDetails?.name || ""}
          queryKey={[`${dataDetails?.name}`, dataDetails?._id || ""]}
        />
      )}
    </Div>
  );
};
