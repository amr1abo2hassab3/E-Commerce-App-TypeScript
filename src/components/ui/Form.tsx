import type { ReactNode } from "react";

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

const Form = ({ children, ...rest }: FormProps) => {
  return <form {...rest}>{children}</form>;
};

export default Form;
