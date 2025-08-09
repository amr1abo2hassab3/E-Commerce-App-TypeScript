import { NavLink } from "react-router-dom";
import Button from "./ui/Button";
import Div from "./ui/Div";
import { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import { settings } from "../data";
import type { IResponse } from "../interfaces";
import { handleLogOut } from "../lib/utils";
import Span from "./ui/Span";
import LogoutIcon from "@mui/icons-material/Logout";

interface DropAccontProps {
  userData: IResponse | null;
}

const DropAccont = ({ userData }: DropAccontProps) => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  // render
  const renderNavAccount = settings.map(({ name, icon: Icon, path }) => (
    <li key={name}>
      <NavLink
        to={path || "/"}
        className="block py-6 px-4 font-bold text-gray-900 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        {name}
        <Span className="text-blue">{Icon && <Icon />}</Span>
      </NavLink>
    </li>
  ));

  return (
    <Div className="relative flex items-center">
      <Button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="font-bold cursor-pointer text-gray-900 dark:text-gray-200 hover:text-main dark:hover:text-yellow-400 focus:outline-none duration-200"
      >
        <Span className="md:block hidden">Account</Span> <PersonIcon />▾
      </Button>

      {dropdownOpen && (
        <ul className="absolute top-10 right-0 mt-2 w-48 text-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg">
          {userData?.token && <>{renderNavAccount}</>}
          {!userData?.token ? (
            <>
              <li className="py-6 px-4">
                <NavLink
                  to="/login"
                  className="block px-4 py-2 font-bold text-gray-900 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Login
                </NavLink>
              </li>
              <li className="py-6 px-4">
                <NavLink
                  to="/register"
                  className="block px-4 py-2 font-bold text-gray-900 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Register
                </NavLink>
              </li>
            </>
          ) : (
            <li className="hover:text-red-600">
              <span
                onClick={handleLogOut}
                className="block py-6 px-4 font-bold text-gray-900 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
              >
                <span className="mr-3 inline-block duration-200">Logout</span>
                <LogoutIcon sx={{ color: "red" }} />
              </span>
            </li>
          )}
        </ul>
      )}
    </Div>
  );
};

export default DropAccont;
