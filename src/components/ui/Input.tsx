interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {}
const Input = ({ ...rest }: IProps) => {
  return <input type="text" {...rest} />;
};

export default Input;
