import { lazy, Suspense, useState } from "react";
import Div from "../components/ui/Div";
import Heading from "../components/ui/Heading";
import Span from "../components/ui/Span";
import useGetDataQuery from "../hooks/useGetDataQuery";
import type { BrandResponse } from "../interfaces/brandInterfaces";
import Pagination from "../components/ui/Pagination";
import HeadingSkeleton from "../components/brands/skeleton/HeadingBrandSkeleton";
import BrandCardSkeleton from "../components/brands/skeleton/BrandCardSkeleton";
const CardBrand = lazy(() => import("./../components/brands/CardBrand"));

const Category = () => {
  // state or hooks
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [pageLimit, setPageLimit] = useState<number>(10);
  const { data, isLoading } = useGetDataQuery<BrandResponse>({
    queryKey: ["getAllCategories"],
    url: `/api/v1/categories?page=${pageNumber}&limit=${pageLimit}`,
  });

  const allCategory = data?.data;
  const totalPages = data?.metadata?.numberOfPages || 1;
  const totalCount = data?.results || data?.data?.length || 0;

  return (
    <Div className="container mx-auto mb-4">
      {isLoading ? (
        <>
          <HeadingSkeleton />
          <Div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
            {Array.from({ length: pageLimit }).map((_, i) => (
              <BrandCardSkeleton key={i} />
            ))}
          </Div>
        </>
      ) : (
        <>
          <Heading
            as="h2"
            className="text-center dark:text-light capitalize font-extrabold text-[40px] mt-20"
          >
            our Category <Span className="text-blue">{data?.results}</Span>
          </Heading>

          <Div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
            {allCategory?.map((category) => (
              <Suspense key={category._id} fallback={<BrandCardSkeleton />}>
                <CardBrand data={category} typeCard="category" />
              </Suspense>
            ))}
          </Div>
        </>
      )}
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
  );
};

export default Category;
