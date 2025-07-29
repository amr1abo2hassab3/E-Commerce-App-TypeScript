import type { ReactNode } from "react";

interface SpanProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

const Span = ({ children, ...rest }: SpanProps) => {
  return <span {...rest}>{children}</span>;
};

export default Span;
