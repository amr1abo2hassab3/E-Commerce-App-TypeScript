import { lazy, Suspense } from "react";
import CardItemSkeleton from "../components/skeleton/CardItemSkeleton";
import Div from "../components/ui/Div";
import Heading from "../components/ui/Heading";
import { cookiesUserDataKey } from "../data";
import useGetDataQuery from "../hooks/useGetDataQuery";
import type { IResponse } from "../interfaces";
import type { ProductWishListResponse } from "../interfaces/productsInterfaces";
import CookieServices from "../Services/CookieServices";
import MessageUi from "../components/ui/MessageUi";
const CardItem = lazy(() => import("../components/CardItem"));
const WishListPage = () => {
  const userData: IResponse = CookieServices.get(cookiesUserDataKey);

  // handler
  const { data, isLoading } = useGetDataQuery<ProductWishListResponse>({
    queryKey: ["getAllWishlistProducts"],
    url: "/api/v1/wishlist",
    config: {
      headers: {
        token: userData.token,
      },
    },
  });

  const count = data?.count || 0;
  const products = data?.data || [];

  // render
  return (
    <Div className="py-9 container mx-auto">
      <Heading
        as="h1"
        className="text-3xl font-bold text-center mb-8 text-blue-600"
      >
        My Wishlist ❤️ ({count})
      </Heading>
      <Div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-cols-1 gap-6 mt-20">
        {isLoading ? (
          Array.from({ length: 10 }).map((_, i) => <CardItemSkeleton key={i} />)
        ) : products?.length ? (
          products?.map((product) => (
            <Suspense key={product._id} fallback={<CardItemSkeleton />}>
              <CardItem
                key={product._id}
                product={product}
                color="#1976D2"
                isFavorit={true}
              />
            </Suspense>
          ))
        ) : (
          <MessageUi
            heading="No products found in Your Wishlist"
            description="Your wishlist is currently empty. Add some products to see them here."
          />
        )}
      </Div>
    </Div>
  );
};

export default WishListPage;
