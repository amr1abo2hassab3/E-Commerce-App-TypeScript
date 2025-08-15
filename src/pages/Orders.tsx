import type { RootState } from "../app/store";
import { OrderDetails } from "../components/Orders/OrderDetails";
import useGetDataQuery from "../hooks/useGetDataQuery";
import { useSelector } from "react-redux";
import type { Order } from "../interfaces/orderInterfaces";
import Div from "../components/ui/Div";
import { OrderDetailsSkeleton } from "../components/Orders/OrdersSkeleton/OrderDetailsSkeleton";
import MessageUi from "../components/ui/MessageUi";
import { UserDetails } from "../components/Orders/UserDetails";

const OrdersPage = () => {
  const { jwtDecode } = useSelector((state: RootState) => state.global);

  const { data, isLoading } = useGetDataQuery<Order[]>({
    queryKey: ["GetAllUserOrders"],
    url: `/api/v1/orders/user/${jwtDecode.id}`,
  });

  return (
    <Div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto ">
      <UserDetails numberOfOrders={data?.length || 0} />
      {isLoading ? (
        [...Array(3)].map((_, i) => <OrderDetailsSkeleton key={i} />)
      ) : data && data?.length > 0 ? (
        data?.map((order: Order) => (
          <OrderDetails key={order._id} order={order} />
        ))
      ) : (
        <MessageUi
          heading="No Orders Found"
          description="Looks like you haven't placed any orders yet. Start shopping now and your orders will appear here."
        />
      )}
    </Div>
  );
};

export default OrdersPage;
