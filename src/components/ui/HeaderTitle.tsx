import Div from "./Div";
import Heading from "./Heading";

interface HeaderTitleProps {
  name: string;
}

export const HeaderTitle = ({ name }: HeaderTitleProps) => {
  return (
    <Div>
      <Heading
        as={"h1"}
        className="font-semibold capitalize text-3xl rounded-[10px] pl-3 border-l-[10px] border-blue text-dark dark:text-light"
      >
        {name}
      </Heading>
    </Div>
  );
};
