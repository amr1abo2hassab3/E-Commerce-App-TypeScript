import { Link } from "react-router-dom";
import type { Brand, Category } from "../../interfaces/productsInterfaces";
import Div from "../ui/Div";
import Img from "../ui/Img";
import Heading from "../ui/Heading";

interface CardBrandProps {
  data: Brand | Category;
  typeCard: "category" | "brand";
}

const CardBrand = ({ data, typeCard }: CardBrandProps) => {
  return (
    <Link
      to={
        typeCard == "brand"
          ? `/brandDetails/${data._id}`
          : `/categoryDetails/${data._id}`
      }
    >
      <Div
        className={`bg-[#FEFEFE] flex rounded cursor-pointer transition-all duration-500 hover:rotate-3 hover:scale-90  
    shadow-[0px_10px_30px_rgba(0,0,0,0.2)] border-blue border
    dark:bg-gray-800 dark:shadow-[0px_10px_30px_rgba(255,255,255,0.1)] dark:border-gray-500`}
      >
        <Div className="bg-blue w-[25%] h-[100px] flex justify-center items-center rounded">
          <Img
            className="max-w-[97px] max-h-[97px] p-2"
            loading="lazy"
            src={data.image}
            alt={data.name}
          />
        </Div>
        <Div className="w-[75%] ml-9 leading-[1.6] flex flex-col justify-center gap-2">
          <Heading
            as="h4"
            className="text-xl capitalize font-semibold dark:text-white"
          >
            {data.name}
          </Heading>
        </Div>
      </Div>
    </Link>
  );
};

export default CardBrand;
