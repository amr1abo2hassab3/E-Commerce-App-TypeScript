import { useState } from "react";
import useGetDataQuery from "../../hooks/useGetDataQuery";
import type { BrandResponse } from "../../interfaces/brandInterfaces";
import type { RespnseCategory } from "../../interfaces/categorysInterfaces";
import { toggleId } from "../../lib/utils";
import SidebarSkeletonList from "../skeleton/SidebarSkeletonItem";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Div from "../ui/Div";
import Heading from "../ui/Heading";
import Input from "../ui/Input";

interface SidebarProps {
  sidebarOpen: boolean;
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
  setSelectedBrands: React.Dispatch<React.SetStateAction<string[]>>;
  setSortPrice: React.Dispatch<React.SetStateAction<string>>;
  sortPrice: string;
}

const Sidebar = ({
  sidebarOpen,
  setSelectedCategories,
  setSelectedBrands,
  setSortPrice,
  sortPrice,
}: SidebarProps) => {
  //
  // state or hooks
  const [showCategories, setShowCategories] = useState<boolean>(true);
  const [showBrands, setShowBrands] = useState<boolean>(true);

  // handler
  const { data: categoryData, isLoading: isCategoriesLoading } =
    useGetDataQuery<RespnseCategory>({
      queryKey: ["getAllCategories"],
      url: "/api/v1/categories",
    });

  const { data: brandData, isLoading: isBrandsLoading } =
    useGetDataQuery<BrandResponse>({
      queryKey: ["getAllBrands"],
      url: "/api/v1/brands",
    });

  const categories = categoryData?.data;
  const brands = brandData?.data;
  // render
  const renderCategories = categories?.map((cat) => (
    <li key={cat._id} className="flex items-center mb-4">
      <Input
        id="default-checkbox"
        type="checkbox"
        onChange={(e) => {
          setSelectedCategories((prev) => toggleId(prev, e.target.value));
        }}
        value={cat._id}
        className="w-5 h-5 rounded cursor-pointer text-blue-600 bg-gray-100 border-gray-300  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        htmlFor="default-checkbox"
        className="ms-2 text-lg font-medium text-gray-900 dark:text-gray-300"
      >
        {cat.name}
      </label>
    </li>
  ));
  const renderBrands = brands?.map((brand) => (
    <li key={brand._id} className="flex items-center mb-4">
      <Input
        id="default-checkbox"
        type="checkbox"
        onChange={(e) => {
          setSelectedBrands((prev) => toggleId(prev, e.target.value));
        }}
        value={brand._id}
        className="w-5 h-5 rounded cursor-pointer text-blue-600 bg-gray-100 border-gray-300  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        htmlFor="default-checkbox"
        className="ms-2 text-lg font-medium text-gray-900 dark:text-gray-300"
      >
        {brand.name}
      </label>
    </li>
  ));

  return (
    <aside
      id="default-sidebar"
      className={`absolute  shadow-xl sm:translate-x-0 top-0 left-0 z-40 w-64 h-screen transition-transform ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      aria-label="Sidebar"
    >
      <Div className="h-full custom-scrollbar rounded-lg px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <Div>
          <label
            htmlFor="countries"
            className="text-blue font-bold lg:text-2xl text-xl my-4 block"
          >
            Sort by Price{" "}
          </label>
          <select
            value={sortPrice}
            onChange={(e) => setSortPrice(e.target.value)}
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="">Default sorting</option>
            <option value="price">Low to High</option>
            <option value="-price">High to Low</option>
          </select>
        </Div>
        <Heading
          className="text-blue text-xl font-bold lg:text-2xl my-4 cursor-pointer flex justify-between items-center"
          onClick={() => setShowCategories((prev) => !prev)}
        >
          Categories
          {showCategories ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </Heading>
        {showCategories && (
          <ul className="space-y-2 font-medium">
            {isCategoriesLoading ? <SidebarSkeletonList /> : renderCategories}
          </ul>
        )}
        {/* Brands */}
        <Heading
          className="text-blue text-xl font-bold lg:text-2xl my-4 cursor-pointer flex justify-between items-center"
          onClick={() => setShowBrands((prev) => !prev)}
        >
          Brands
          {showCategories ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </Heading>
        {showBrands && (
          <ul className="space-y-2 font-medium">
            {isBrandsLoading ? <SidebarSkeletonList /> : renderBrands}
          </ul>
        )}
      </Div>
    </aside>
  );
};

export default Sidebar;
