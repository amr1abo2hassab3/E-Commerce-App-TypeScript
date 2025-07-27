interface InputErroMessageProps extends React.HTMLAttributes<HTMLSpanElement> {
  msg?: string;
}

const InputErroMessage = ({ msg }: InputErroMessageProps) => {
  return msg ? (
    <span className="block text-red-700 font-semibold text-sm">{msg}</span>
  ) : null;
};

export default InputErroMessage;
