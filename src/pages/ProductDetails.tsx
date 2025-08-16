import { useParams } from "react-router-dom";
import { Suspense, lazy } from "react";
import type { ResponseProductDetails } from "../interfaces/productsInterfaces";
import useGetDataQuery from "../hooks/useGetDataQuery";
import ProductDetailsSkeleton from "../components/productDetails/ProductDetailsSkeleton";
import CardItemSkeleton from "../components/skeleton/CardItemSkeleton";

// lazy load components
const ProductDetailsContent = lazy(
  () => import("../components/productDetails/ProductDetailsContent")
);
const NewCollection = lazy(() =>
  import("../components/home/NewCollection").then((module) => ({
    default: module.NewCollection,
  }))
);

export default function ProductDetails() {
  // state or hooks
  const { id } = useParams<{ id: string }>();
  // handler
  const { data, isLoading } = useGetDataQuery<ResponseProductDetails>({
    queryKey: ["GetProductDetails", id || ""],
    url: `/api/v1/products/${id}`,
  });

  const product = data?.data;

  return (
    <section className="mx-auto container">
      {isLoading && <ProductDetailsSkeleton />}
      <Suspense fallback={<ProductDetailsSkeleton />}>
        {product && <ProductDetailsContent product={product} />}
      </Suspense>

      <Suspense fallback={<CardItemSkeleton />}>
        {product && (
          <NewCollection
            idCategory={product?.category._id}
            category={product?.category.name}
            queryKey={[`${product?.category.name}`, product?.category._id]}
          />
        )}
      </Suspense>
    </section>
  );
}
