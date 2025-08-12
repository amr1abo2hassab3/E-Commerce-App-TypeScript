import Span from "./Span";

interface InputErroMessageProps extends React.HTMLAttributes<HTMLSpanElement> {
  msg?: string;
}

const InputErroMessage = ({ msg }: InputErroMessageProps) => {
  return msg ? (
    <Span className="block text-red-700 font-semibold text-sm">{msg}</Span>
  ) : null;
};

export default InputErroMessage;
