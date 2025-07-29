import Button from "./ui/Button";
import Div from "./ui/Div";
import Form from "./ui/Form";
import Input from "./ui/Input";

interface ItemSearchProps {
    
}

export const ItemSearch = ({}: ItemSearchProps) => {
  return (
    <Div className="max-w-2xl mx-auto mt-10">
      <Form>
        <label htmlFor="default-search" className="sr-only">
          Search
        </label>
        <Div className="relative">
          <Div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </Div>
          <Input
            // value={keyWord}
            // onChange={(e) => setKeyWord(e.target.value)}
            type="search"
            id="default-search"
            className="block p-4 pl-10 w-full text-sm text-dark bg-light border border-light rounded-lg 
                   dark:bg-dark dark:text-light dark:border-gray-600 
                   focus:ring-blue focus:border-blue transition-all duration-300"
            placeholder="Search Any Product here ..."
          />
          <Button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue duration-300 hover:bg-blue-700 
                   focus:ring-4 focus:outline-none focus:ring-blue font-medium rounded-lg text-sm px-4 py-2
                   "
          >
            Search
          </Button>
        </Div>
      </Form>
    </Div>
  );
};
