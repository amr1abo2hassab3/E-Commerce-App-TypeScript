import { Link } from "react-router-dom";
import Div from "../ui/Div";
import Heading from "../ui/Heading";
import Img from "../ui/Img";
import Paragraph from "../ui/Paragraph";
import Span from "../ui/Span";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import UserAddress from "./UserAddress";
import useGetDataQuery from "../../hooks/useGetDataQuery";
import PersonIcon from "@mui/icons-material/Person";
import type {
  Address,
  ResponseAddress,
} from "../../interfaces/orderInterfaces";
import axiosInstance from "../../config/axios.config";
import { toast } from "react-toastify";
import {
  AddressCardSkeleton,
  UserHeaderSkeleton,
} from "./OrdersSkeleton/UserHeaderSkeleton";
import MessageUi from "../ui/MessageUi";

interface UserDetailsProps {
  numberOfOrders: number;
}

export const UserDetails = ({ numberOfOrders = 0 }: UserDetailsProps) => {
  const { jwtDecode, userData } = useSelector(
    (state: RootState) => state.global
  );

  const { data, refetch, isLoading } = useGetDataQuery<ResponseAddress>({
    queryKey: ["getUserAddress"],
    url: `/api/v1/addresses`,
    config: {
      headers: {
        token: userData?.token,
      },
    },
  });

  async function handleDeleteAddress(id: string) {
    try {
      await toast.promise(
        axiosInstance.delete(`/api/v1/addresses/${id}`, {
          headers: {
            token: userData?.token,
          },
        }),
        {
          pending: "Deleting Address...",
          success: "Address Deleted Successfully",
          error: "Failed to Delete this Address",
        }
      );
      refetch();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Div className="bg-gray-50 dark:bg-gray-800 w-full px-4 py-6 md:p-6 xl:p-8 mb-5 flex flex-col gap-6">
      {/* Header */}
      <Heading
        as="h3"
        className="text-xl dark:text-white font-semibold leading-5 text-gray-800 flex items-center gap-2"
      >
        My Account <PersonIcon className="text-main text-2xl" />
      </Heading>

      <Div className="flex flex-col lg:flex-row gap-8 w-full">
        {/* Left: user header */}
        {isLoading ? (
          <UserHeaderSkeleton />
        ) : (
          <Div className="flex flex-col flex-shrink-0 w-full lg:w-1/3">
            {/* User info */}
            <Div className="flex items-center gap-4 py-8 border-b border-gray-200">
              <Img
                src="https://i.ibb.co/5TSg7f6/Rectangle-18.png"
                alt="avatar"
              />
              <Div className="flex flex-col gap-1">
                <Paragraph className="text-base dark:text-white font-semibold leading-4 text-gray-800">
                  {jwtDecode.name}
                </Paragraph>
                <Paragraph className="text-sm dark:text-gray-300 text-gray-600">
                  <Span className="font-bold text-blue">{numberOfOrders}</Span>{" "}
                  Previous Orders
                </Paragraph>
              </Div>
            </Div>

            {/* Email */}
            <Div className="flex items-center gap-4 py-4 border-b border-gray-200 text-gray-800 dark:text-white">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 7L12 13L21 7"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <Paragraph className="cursor-pointer text-sm leading-5">
                {userData?.user?.email}
              </Paragraph>
            </Div>
          </Div>
        )}

        {/* Right: addresses list */}
        <Div className="flex flex-col gap-6 w-full">
          {/* Addresses */}
          <Div className="flex flex-col md:flex-row flex-wrap gap-6">
            {isLoading ? (
              Array.from({ length: 2 }).map((_, i) => (
                <AddressCardSkeleton key={i} />
              ))
            ) : data && data.data.length > 0 ? (
              data.data.map((address: Address) => (
                <UserAddress
                  key={address._id}
                  address={address}
                  handleDeleteAddress={handleDeleteAddress}
                />
              ))
            ) : (
              <MessageUi
                heading="No Addresses Found"
                description="You haven't added any addresses yet. Add a new address to make your checkout faster and easier."
              />
            )}
          </Div>

          {/* Action buttons */}
          <Div className="flex flex-col sm:flex-row gap-4">
            <Link
              className="bg-blue hover:text-black hover:!border-blue border-[1px] hover:!bg-white py-[14px] px-10 rounded text-white font-bold transition-all duration-300 border-transparent"
              to={"/update_account"}
            >
              Edit Details
            </Link>
            <Link
              className="bg-blue hover:text-black hover:!border-blue border-[1px] hover:!bg-white py-[14px] px-10 rounded text-white font-bold transition-all duration-300 border-transparent"
              to={"/addNewAddress"}
            >
              Add New Address
            </Link>
          </Div>
        </Div>
      </Div>
    </Div>
  );
};
