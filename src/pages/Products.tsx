import { lazy, Suspense, useState } from "react";
import Button from "../components/ui/Button";
import Div from "../components/ui/Div";
import Sidebar from "../components/products/Sidebar";
import useGetDataQuery from "../hooks/useGetDataQuery";
import type { ProductsResponse } from "../interfaces/productsInterfaces";
import CardItemSkeleton from "../components/skeleton/CardItemSkeleton";
import Pagination from "../components/ui/Pagination";
import MessageUi from "../components/ui/MessageUi";
import type { RootState } from "../app/store";
import { useSelector } from "react-redux";
import { isFavorite } from "../lib/utils";
const CardItem = lazy(() => import("../components/CardItem"));

const ProductsPage = () => {
  // state or hooks
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [pageLimit, setPageLimit] = useState<number>(10);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [sortPrice, setSortPrice] = useState<string>("");
  const { productsIdFavorite } = useSelector(
    (state: RootState) => state.global
  );
  // handler
  const categoryQueryParams = selectedCategories
    .map((id) => `category[in]=${id}`)
    .join("&");

  const brandQueryParams = selectedBrands.map((id) => `brand=${id}`).join("&");

  const sortParam = sortPrice ? `&sort=${sortPrice}` : "";

  const url = `/api/v1/products?page=${pageNumber}&limit=${pageLimit}${
    selectedCategories.length > 0 ? `&${categoryQueryParams}` : ""
  }${selectedBrands.length > 0 ? `&${brandQueryParams}` : ""}${sortParam}`;

  const { data: productsData, isLoading } = useGetDataQuery<ProductsResponse>({
    queryKey: [
      "getAllProducts",
      `${pageNumber}`,
      `${pageLimit}`,
      selectedCategories.toString(),
      selectedBrands.toString(),
      sortPrice,
    ],
    url,
  });

  const dataProducts = productsData?.data;
  const totalPages = productsData?.metadata?.numberOfPages || 1;
  const totalCount = productsData?.results || productsData?.data?.length || 0;

  return (
    <Div className="">
      <Button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
        </svg>
      </Button>

      <Div className="relative custom-scrollbar min-h-screen rounded-lg shadow-2xl">
        <Sidebar
          setSortPrice={setSortPrice}
          sortPrice={sortPrice}
          setSelectedBrands={setSelectedBrands}
          setSelectedCategories={setSelectedCategories}
          sidebarOpen={sidebarOpen}
        />
        <Div className="px-4 sm:ml-64 text-white ">
          <Div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-cols-1 gap-6 mt-20">
            {isLoading ? (
              Array.from({ length: pageLimit }).map((_, i) => (
                <CardItemSkeleton key={i} />
              ))
            ) : dataProducts?.length ? (
              dataProducts?.map((product) => (
                <Suspense key={product._id} fallback={<CardItemSkeleton />}>
                  <CardItem
                    key={product._id}
                    product={product}
                    color="#1976D2"
                    isFavorit={isFavorite(productsIdFavorite, product._id)}
                  />
                </Suspense>
              ))
            ) : (
              <MessageUi
                heading="No products found"
                description=" Try adjusting your filters or check back later."
              />
            )}
          </Div>
          {isLoading ? (
            <Pagination
              loading={isLoading}
              pageNumber={pageNumber}
              pageLimit={pageLimit}
              setPageNumber={setPageNumber}
              totalPages={totalPages}
              totalCount={totalCount}
              setPageLimit={setPageLimit}
            />
          ) : (
            totalCount > pageLimit && (
              <Pagination
                pageNumber={pageNumber}
                pageLimit={pageLimit}
                setPageNumber={setPageNumber}
                totalPages={totalPages}
                totalCount={totalCount}
                setPageLimit={setPageLimit}
              />
            )
          )}
        </Div>
      </Div>
    </Div>
  );
};

export default ProductsPage;
