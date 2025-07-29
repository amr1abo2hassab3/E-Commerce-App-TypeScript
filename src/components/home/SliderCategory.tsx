import Slider from "react-slick";
import Heading from "../ui/Heading";
import Div from "../ui/Div";
import Img from "../ui/Img";
import useGetDataQuery from "../../hooks/useGetDataQuery";
import type { category, RespnseCategory } from "../../interfaces/categorys";
import CategorySkeleton from "./../skeleton/CategorySkeleton";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 3,
  arrows: false,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const CategoriesSlider = () => {
  // handler
  const { data, isError, isLoading, error } = useGetDataQuery<RespnseCategory>({
    queryKey: ["getAllCategories"],
    url: "/api/v1/categories",
  });

  const categories = data?.data;

  // render
  const renderCategories = isLoading
    ? Array.from({ length: 6 }).map((_, index) => (
        <CategorySkeleton key={index} />
      ))
    : categories?.map((cat: category) => (
        <Div key={cat._id} className="w-full px-1">
          <Img
            className="w-full h-60 object-cover rounded-md"
            src={cat.image}
            alt={cat.name}
            loading="lazy"
          />
          <Heading
            as="h3"
            className="text-center mt-4 text-dark dark:text-light"
          >
            {cat.name}
          </Heading>
        </Div>
      ));

  return (
    <Div className="my-16">
      <Heading className="capitalize text-2xl font-bold mb-3 text-dark dark:text-light">
        shop popular categories
      </Heading>
      {isError && (
        <p className="text-center text-xl font-bold">{error.message} ❌😫</p>
      )}
      <Slider {...settings}>{renderCategories}</Slider>
    </Div>
  );
};
