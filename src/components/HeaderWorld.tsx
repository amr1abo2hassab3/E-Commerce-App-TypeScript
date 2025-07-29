import { Link } from "react-router-dom";
import img from "../assets/images/all.png";
import { HeaderTitle } from "./ui/HeaderTitle";
import Div from "./ui/Div";
import Img from "./ui/Img";
import Heading from "./ui/Heading";

export const HeaderWorled = () => {
  return (
    <Div className="py-20">
      <Div className="container mx-auto">
        <Div className="grid lg:grid-cols-2 grid-cols-1 items-center shadow-[0px_10px_30px_rgba(0,0,0,0.2)] rounded-md overflow-hidden">
          <Div className="w-full h-full bg- p-[113px] flex items-center justify-center bg-secondary">
            <Img src={img} alt="image header" />
          </Div>
          <Div className="w-full p-16 ">
            <HeaderTitle name={"New Collection"} />
            <Heading
              as="h3"
              className="my-5 font-extrabold dark:text-light text-dark text-3xl leading-[1.2]"
            >
              Explore The World of Advanced
            </Heading>
            <Link
              to={"/category"}
              className="bg-blue hover:text-black hover:!border-blue border-[1px] hover:!bg-white py-[14px] px-10 rounded text-white font-bold transition-all duration-300 border-transparent mt-4 inline-block"
            >
              shop now
            </Link>
          </Div>
        </Div>
      </Div>
    </Div>
  );
};
