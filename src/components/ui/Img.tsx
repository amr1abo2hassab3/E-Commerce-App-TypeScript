const Img: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = ({
  ...props
}) => {
  return <img {...props} />;
};

export default Img;
