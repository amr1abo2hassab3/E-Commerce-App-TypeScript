import { useParams } from "react-router-dom";
import { Suspense, lazy } from "react";
import type { ResponseProductDetails } from "../interfaces/productsInterfaces";
import useGetDataQuery from "../hooks/useGetDataQuery";
import ProductDetailsSkeleton from "../components/productDetails/ProductDetailsSkeleton";

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
  const { data } = useGetDataQuery<ResponseProductDetails>({
    queryKey: ["GetProductDetails", id || ""],
    url: `/api/v1/products/${id}`,
  });

  const product = data?.data;

  return (
    <section>
      <Suspense fallback={<ProductDetailsSkeleton />}>
        {product && <ProductDetailsContent product={product} />}
      </Suspense>

      <Suspense fallback={<div>Loading related products...</div>}>
        {product && (
          <NewCollection
            id={product?.category._id}
            category={product?.category.name}
            queryKey={[`${product?.category.name}`, product?.category._id]}
          />
        )}
      </Suspense>
    </section>
  );
}
