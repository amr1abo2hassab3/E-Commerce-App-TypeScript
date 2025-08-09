import { NavLink } from "react-router-dom";
import logo from "../assets/images/freshcart-logo.svg";
import { useState } from "react";
import Div from "../components/ui/Div";
import Img from "../components/ui/Img";
import Button from "../components/ui/Button";
import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import { handleLogOut } from "../lib/utils";
import ChangeMode from "../components/ChangeMode";
import MenuIcon from "@mui/icons-material/Menu";
import DropAccont from "../components/DropAccont";
import Span from "../components/ui/Span";

const pages = [
  { name: "home", to: "/" },
  { name: "products", to: "/products" },
  { name: "category", to: "/category" },
  { name: "brands", to: "/brands" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const { userData } = useSelector((state: RootState) => state.global);

  // render
  const renderNavLinks = pages.map((link) => (
    <li key={link.name}>
      <NavLink
        to={link.to}
        className="block capitalize duration-200 rounded py-2 px-4 text-gray-900 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        {link.name}
      </NavLink>
    </li>
  ));

  return (
    <nav className="bg-blue dark:bg-dark static w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <Div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Div className="flex relative items-center space-x-3 rtl:space-x-reverse">
          <Img src={logo} className="h-8" alt="Logo" />
          <ChangeMode
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
            setMobileMenuOpen={setMobileMenuOpen}
          />
        </Div>

        <Button
          onClick={() => {
            setMobileMenuOpen(!mobileMenuOpen);
            setIsDarkMode(false);
          }}
          className="md:hidden p-2 ml-11  text-gray-500 hover:bg-gray-100 rounded-lg focus:outline-none"
        >
          <MenuIcon fontSize="medium" />
        </Button>

        {mobileMenuOpen && (
          <Div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-lg md:hidden">
            <ul className="flex flex-col space-y-2 p-4">
              {renderNavLinks}
              {!userData?.token ? (
                <>
                  <li>
                    <NavLink
                      to="/login"
                      className="block py-2 px-4 text-gray-900 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      Login
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/register"
                      className="block py-2 px-4 text-gray-900 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      Register
                    </NavLink>
                  </li>
                </>
              ) : (
                <li>
                  <Span
                    onClick={handleLogOut}
                    className="block py-2 px-4 text-gray-900 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
                  >
                    Logout
                  </Span>
                </li>
              )}
            </ul>
          </Div>
        )}

        <Div className="hidden md:flex md:items-center md:space-x-8">
          <ul className="flex space-x-3 xl:space-x-8 font-medium">
            {renderNavLinks}
          </ul>
        </Div>

        <DropAccont userData={userData} />
      </Div>
    </nav>
  );
};

export default Navbar;
