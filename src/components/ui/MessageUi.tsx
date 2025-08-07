import type { ReactNode } from "react";
import Div from "./Div";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

interface MessageUiProps {
  heading?: string;
  description?: string;
  children?: ReactNode;
}

const MessageUi = ({ description, heading, children }: MessageUiProps) => {
  return (
    <Div className="col-span-full  flex flex-col items-center justify-center mt-20 text-center p-10 border border-dashed border-gray-300 dark:border-gray-600 rounded-lg">
      <Heading className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
        {heading}
      </Heading>
      <Paragraph className="text-gray-500 dark:text-gray-400 mt-2">
        {description}
      </Paragraph>
      {children}
    </Div>
  );
};

export default MessageUi;
