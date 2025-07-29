import type { ReactNode } from "react";

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children?: ReactNode;
}

const Paragraph = ({ children, ...rest }: ParagraphProps) => {
  return <p {...rest}>{children}</p>;
};

export default Paragraph;
