import { lazy, Suspense } from "react";
import useGetDataQuery from "../../hooks/useGetDataQuery";
import { HeaderTitle } from "../ui/HeaderTitle";
import Div from "../ui/Div";
import Heading from "../ui/Heading";
import Span from "../ui/Span";
import type { ProductsResponse } from "../../interfaces/productsInterfaces";
import CardItemSkeleton from "../skeleton/CardItemSkeleton";

const CardItem = lazy(() => import("../CardItem"));

interface NewCollectionProps {
  id: string;
  category: string;
  queryKey: string[];
}

export const NewCollection = ({
  id,
  category,
  queryKey,
}: NewCollectionProps) => {
  // handler
  const { data } = useGetDataQuery<ProductsResponse>({
    queryKey: queryKey,
    url: `/api/v1/products?category[in]=${id}`,
  });
  const dataProducts = data?.data;

  return dataProducts?.length ? (
    <Div className="my-16">
      <HeaderTitle name={category} />
      <Heading
        as="h3"
        className="mt-5 font-extrabold text-[36px]  text-dark dark:text-light"
      >
        New <Span className="text-blue">{category}</Span> Collection{" "}
        <Span className="text-blue pl-5">{dataProducts?.length}</Span> Items
      </Heading>

      <Div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-cols-1 gap-6 mt-20">
        {dataProducts?.map((product) => (
          <Suspense key={product._id} fallback={<CardItemSkeleton />}>
            <CardItem key={product._id} product={product} color="#1976D2" />
          </Suspense>
        ))}
      </Div>
    </Div>
  ) : null;
};
