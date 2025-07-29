import Slider from "react-slick";
import Div from "../ui/Div";
import Img from "../ui/Img";
import { images } from "../../data";
import img1 from "../../assets/images/slider-image-1.jpeg";
import img2 from "../../assets/images/slider-image-2.jpeg";

const SliderHome = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };
  return (
    <div className="container mx-auto my-12 flex md:px-4">
      <div className="w-3/4">
        <Slider {...settings}>
          {images.map((img: string, index: number) => (
            <Div key={index}>
              <Img
                className="h-[400px] w-full"
                src={img}
                alt="slider img 1 E-Commerce"
              />
            </Div>
          ))}
        </Slider>{" "}
      </div>
      <div className="w-1/4">
        <Img className="w-full h-[200px]" src={img1} alt="slider img 1" />
        <Img className="w-full h-[200px]" src={img2} alt="slider img 2" />
      </div>
    </div>
  );
};

export default SliderHome;
