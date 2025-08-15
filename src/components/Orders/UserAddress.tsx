import type { Address } from "../../interfaces/orderInterfaces";
import Div from "../ui/Div";
import Paragraph from "../ui/Paragraph";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

interface UserAddressProps {
  address: Address;
  handleDeleteAddress: (id: string) => void;
}

const UserAddress = ({ address, handleDeleteAddress }: UserAddressProps) => {
  return (
    <Div className="flex my-3 justify-between items-start w-full border rounded-lg p-4 shadow-sm dark:bg-gray-800">
      {/* Left side: Address info */}
      <Div className="flex flex-col space-y-2">
        <Paragraph className="flex items-center gap-2 text-base dark:text-white font-semibold leading-4 text-gray-800">
          <HomeIcon fontSize="small" className="text-main" />
          {address.name}
        </Paragraph>

        <Paragraph className="flex items-center gap-2 w-48 lg:w-full dark:text-gray-300 text-sm leading-5 text-gray-600">
          <LocationOnIcon fontSize="small" className="text-main" />
          {address.details}, {address.city}
        </Paragraph>

        <Paragraph className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <PhoneIcon fontSize="small" className="text-main" />
          {address.phone}
        </Paragraph>
      </Div>

      {/* Right side: Delete button */}
      <IconButton
        onClick={() => handleDeleteAddress(address._id)}
        color="error"
      >
        <DeleteIcon />
      </IconButton>
    </Div>
  );
};

export default UserAddress;
