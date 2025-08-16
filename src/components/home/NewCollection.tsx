import { lazy, Suspense, useState } from "react";
import useGetDataQuery from "../../hooks/useGetDataQuery";
import { HeaderTitle } from "../ui/HeaderTitle";
import Div from "../ui/Div";
import Heading from "../ui/Heading";
import Span from "../ui/Span";
import type { ProductsResponse } from "../../interfaces/productsInterfaces";
import CardItemSkeleton from "../skeleton/CardItemSkeleton";
import Pagination from "../ui/Pagination";
import PaginationSkeleton from "../skeleton/PaginationSkeleton";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import { isFavorite } from "../../lib/utils";
import MessageUi from "../ui/MessageUi";

const CardItem = lazy(() => import("../CardItem"));

interface NewCollectionProps {
  idCategory?: string;
  idBrand?: string;
  category: string;
  queryKey: string[];
}

export const NewCollection = ({
  idCategory,
  idBrand,
  category,
  queryKey,
}: NewCollectionProps) => {
  // state or hooks
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [pageLimit, setPageLimit] = useState<number>(10);
  const { productsIdFavorite } = useSelector(
    (state: RootState) => state.global
  );

  // handler
  const { data, isLoading } = useGetDataQuery<ProductsResponse>({
    queryKey: [...queryKey, `${pageNumber}`, `${pageLimit}`],
    url: `/api/v1/products?${idCategory ? `category[in]=${idCategory}` : ""}&${
      idBrand ? `brand=${idBrand}` : ""
    }&page=${pageNumber}&limit=${pageLimit}`,
  });

  const dataProducts = data?.data;
  const totalPages = data?.metadata?.numberOfPages || 1;
  const totalCount = data?.results || data?.data?.length || 0;

  if (isLoading) {
    return (
      <>
        <Div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-cols-1 gap-6 mt-20">
          {Array.from({ length: pageLimit }).map((_, i) => (
            <CardItemSkeleton key={i} />
          ))}
        </Div>
        <PaginationSkeleton />
      </>
    );
  }

  return dataProducts?.length ? (
    <Div className="my-16">
      <HeaderTitle name={category} />
      <Heading
        as="h3"
        className="mt-5 font-extrabold text-[36px]  text-dark dark:text-light"
      >
        New <Span className="text-blue">{category}</Span> Collection{" "}
        <Span className="text-blue pl-5">{data?.results}</Span> Items
      </Heading>
      <Div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-cols-1 gap-6 mt-20">
        {dataProducts?.map((product) => (
          <Suspense key={product._id} fallback={<CardItemSkeleton />}>
            <CardItem
              key={product._id}
              product={product}
              color="#1976D2"
              isFavorit={isFavorite(productsIdFavorite, product._id)}
            />
          </Suspense>
        ))}
      </Div>
      <Pagination
        pageNumber={pageNumber}
        pageLimit={pageLimit}
        loading={isLoading}
        setPageNumber={setPageNumber}
        totalPages={totalPages}
        totalCount={totalCount}
        textContenet={`${category} items`}
        setPageLimit={setPageLimit}
      />
    </Div>
  ) : (
    <MessageUi
      heading="No products found"
      description={`No Products Found in this ${category}`}
    />
  );
};
