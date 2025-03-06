import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.jpg";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import Select from "../selectdrop/Select";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import axios from "axios";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import Navigation from "../Header/Navigation";

const AccountMenu = [
  { icon: <PermIdentityIcon />, label: "My Account" },
  { icon: <TaskAltIcon />, label: "Orders" },
  { icon: <FavoriteBorderIcon />, label: "Wishlist" },
  { icon: <LogoutIcon />, label: "Sign Out" },
];

function Header() {
  const [categories, setCategories] = useState([
    "Fashion",
    "Electronics",
    "Bags",
    "Footwear",
    "Groceries",
    "Beauty",
    "Wellness",
    "Jewelry",
  ]);

  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    getCountry();
  }, []);

  const getCountry = async () => {
    try {
      const res = await axios.get("https://restcountries.com/v3.1/all");
      if (res.data) {
        setCountryList(res.data.map((country) => country.name.common)); // Extract country names
        console.log(
          "Countries:",
          res.data.map((country) => country.name.common)
        ); // Log country names
      }
    } catch (error) {
      console.error("Error fetching countries:", error.message);
    }
  };

  const [isOpen, setisOpen] = useState(false);

  return (
    <>
      <div className="p-3   pl-11">
        <div className="flex gap-11 ">
          <img src={logo} className="" alt="Logo" />
          <div className="w-[40%] border-2 border-gray-400 px-4 ml-4  flex items-center rounded-sm">
            <div className="w-64 border-r-2 flex">
              <Select data={categories} placeholder={"All Categories"} />
            </div>

            <input
              type="text"
              className="w-full outline-0 pl-2"
              placeholder="Search items"
            />
            <div className="opacity-40">
              <SearchRoundedIcon />
            </div>
          </div>
          {/* Location Section */}
          <div className="  p-2   bg-gray-100 hover:bg-gray-200 rounded-lg w-48 flex gap-3 shadow-lg cursor-pointer">
            <LocationOnIcon style={{ color: "green" }} />

            <Select
              data={countryList}
              placeholder={"Your Location"}
              className="placeholder:text-green-400"
              style={{ placeholder: "green", Opacity: 10 }}
            />
          </div>

          {/* Display three icons list */}

          <div className="">
            <ul className="flex gap-6 px-6 pt-2">
              <li className="flex items-center relative">
                <span className="pr-2 relative">
                  <FavoriteBorderIcon className="relative" />
                  <span
                    className="bg-green-400 text-white text-xs flex items-center justify-center 
                        absolute top-[-5px] right-0 h-4 w-4 rounded-full"
                  >
                    3
                  </span>
                </span>
                Wishlist
              </li>
              <li className="flex items-center relative">
                <span className="pr-2 relative">
                  <ShoppingCartCheckoutIcon />
                  <span
                    className="bg-green-400 text-white text-xs flex items-center justify-center 
                        absolute top-[-5px] right-0 h-4 w-4 rounded-full"
                  >
                    2
                  </span>
                </span>
                Cart
              </li>
              <li
                className="relative cursor-pointer"
                onMouseEnter={() => {
                  setisOpen(true);
                }}
                onMouseLeave={() => {
                  setisOpen(false);
                }}
              >
                <span className="pr-2">
                  <PermIdentityIcon />
                </span>
                Account
                {isOpen && (
                  <ul className="absolute  w-48 h-auto shadow-2xl sha p-2.5 ">
                    {AccountMenu.map((item, index) => (
                      <li
                        key={index}
                        className="text-sm text-black pt-2 hover:bg-gray-100 cursor-pointer items-center align-top "
                      >
                        <Button className="  ">
                          <span className="text-black flex  gap-2  ">
                            {item.icon}
                            {item.label}
                          </span>
                        </Button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Navigation />
    </>
  );
}

export default Header;
