import type { ReactNode } from "react";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Heading = ({ children, as: Tag = "h2", ...rest }: HeadingProps) => {
  return <Tag {...rest}>{children}</Tag>;
};

export default Heading;
