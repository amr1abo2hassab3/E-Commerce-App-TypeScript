import ReactPaginate from "react-paginate";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Div from "./Div";
import PaginationSkeleton from "../skeleton/PaginationSkeleton";

interface PaginationProps {
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
  pageNumber: number;
  pageLimit: number;
  totalCount: number;
  loading?: boolean;
  textContenet?: string;
  setPageLimit: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination = ({
  pageNumber,
  textContenet,
  loading,
  setPageNumber,
  totalPages,
  pageLimit,
  totalCount,
  setPageLimit,
}: PaginationProps) => {
  const handlePageClick = (page: { selected: number }) => {
    setPageNumber(page.selected + 1);
  };

  if (loading) return <PaginationSkeleton />;

  return (
    <Div className="flex flex-col md:flex-row justify-between items-center px-4 py-6 gap-4 border-t mt-12 dark:border-gray-700">
      {totalCount > pageLimit ? (
        <>
          {/* Text + Select */}
          <Div className="text-sm text-gray-700 dark:text-gray-300 flex flex-wrap items-center gap-3">
            <span>
              Showing{" "}
              <strong className="text-dark dark:text-white">
                {(pageNumber - 1) * pageLimit + 1} -{" "}
                {Math.min(pageNumber * pageLimit, totalCount)}
              </strong>{" "}
              of {totalCount}
            </span>

            <label htmlFor="limit" className="ml-4">
              Items per page:
            </label>
            <select
              id="limit"
              value={pageLimit}
              onChange={(e) => {
                setPageLimit(Number(e.target.value));
                setPageNumber(1);
              }}
              className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md px-3 py-1 text-sm text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {[5, 10, 20, 50].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </Div>

          {/* Pagination */}
          <ReactPaginate
            forcePage={pageNumber - 1}
            nextLabel={<ArrowForwardIosIcon fontSize="small" />}
            previousLabel={<ArrowBackIosIcon fontSize="small" />}
            onPageChange={handlePageClick}
            marginPagesDisplayed={1}
            pageRangeDisplayed={2}
            pageCount={totalPages}
            containerClassName="flex items-center justify-center flex-wrap gap-2"
            pageClassName=""
            pageLinkClassName="px-3 py-1.5 text-sm rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 transition"
            previousClassName=""
            nextClassName=""
            previousLinkClassName="px-3 py-1.5 text-sm rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 transition"
            nextLinkClassName="px-3 py-1.5 text-sm rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 transition"
            breakClassName=""
            breakLinkClassName="px-3 py-1.5 text-sm rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200"
            activeLinkClassName="!bg-orange-600 !text-white border-transparent"
          />
        </>
      ) : (
        <Div className="text-sm text-gray-600 dark:text-gray-300">
          {textContenet}: {totalCount}
        </Div>
      )}
    </Div>
  );
};

export default Pagination;
