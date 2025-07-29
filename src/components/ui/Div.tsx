import type { ReactNode } from "react";

interface DivProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

const Div = ({ children, ...rest }: DivProps) => {
  return <div {...rest}>{children}</div>;
};

export default Div;
