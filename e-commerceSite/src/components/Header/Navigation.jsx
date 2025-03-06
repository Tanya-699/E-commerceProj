import React, { useState } from "react";
import { Button } from "@mui/material";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import { KeyboardArrowDown } from "@mui/icons-material";
import HeadsetIcon from "@mui/icons-material/Headset";
import { Link } from "react-router-dom";

function Navigation() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleMouseEnter = (menu) => setOpenDropdown(menu);
  const handleMouseLeave = () => setOpenDropdown(null);

  return (
    <div className="border-t border-b border-[#212529] flex items-center justify-between pt-2 pb-2 px-7 relative">
      {/* Browse All Button */}
      <div className=" bg-[#279a65] rounded-sm">
        <Button>
          <span className="text-white flex items-center gap-1">
            <BorderAllIcon sx={{ fontSize: 20 }} />
            <p className="capitalize text-[13px] font-bold">
              Browse All Categories
            </p>
            <KeyboardArrowDown />
          </span>
        </Button>
      </div>

      {/* Navigation */}
      <div>
        <ul className="flex gap-5 nav-list-item ">
          <li>
            <Button>
              <Link to="/" className="text-black capitalize">
                Home
              </Link>
            </Button>
          </li>

          {/* Fashion Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter("fashion")}
            onMouseLeave={handleMouseLeave}
          >
            <Button>
              <Link to="#" className="text-black capitalize">
                Fashion <KeyboardArrowDown />
              </Link>
            </Button>

            {openDropdown === "fashion" && (
              <ul
                className={`absolute w-32 p-4 top-10 shadow-xl bg-white cursor-pointer text-left `}
              >
                <li>
                  <Button>
                    <Link
                      className="text-black capitalize text-left"
                      to="/fashion/men "
                    >
                      Men
                    </Link>
                  </Button>
                </li>
                <li>
                  <Button>
                    <Link className="text-black capitalize" to="/fashion/women">
                      Women
                    </Link>
                  </Button>
                </li>
              </ul>
            )}
          </li>

          {/* Electronics Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter("electronics")}
            onMouseLeave={handleMouseLeave}
          >
            <Button>
              <Link to="#" className="text-black capitalize">
                Electronics <KeyboardArrowDown />
              </Link>
            </Button>
            {openDropdown === "electronics" && (
              <ul
                className={`absolute w-32 p-4 top-10 shadow-xl bg-white cursor-pointer `}
              >
                <li>
                  <Button>
                    <Link
                      className="text-black capitalize"
                      to="/electronics/men"
                    >
                      Men
                    </Link>
                  </Button>
                </li>
                <li>
                  <Button>
                    <Link
                      className="text-black capitalize"
                      to="/electronics/women"
                    >
                      Women
                    </Link>
                  </Button>
                </li>
              </ul>
            )}
          </li>

          {/* Bags Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter("bags")}
            onMouseLeave={handleMouseLeave}
          >
            <Button>
              <Link to="#" className="text-black capitalize">
                Bags <KeyboardArrowDown />
              </Link>
            </Button>
            {openDropdown === "bags" && (
              <ul className="absolute w-32 p-4 top-10 shadow-2xl bg-white cursor-pointer">
                <li>
                  <Button>
                    <Link className="text-black capitalize" to="/bags/men">
                      Men
                    </Link>
                  </Button>
                </li>
                <li>
                  <Button>
                    <Link className="text-black capitalize" to="/bags/women">
                      Women
                    </Link>
                  </Button>
                </li>
              </ul>
            )}
          </li>

          {/* Footwear Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter("footwear")}
            onMouseLeave={handleMouseLeave}
          >
            <Button>
              <Link to="#" className="text-black capitalize">
                Footwear <KeyboardArrowDown />
              </Link>
            </Button>
            {openDropdown === "footwear" && (
              <ul className="absolute w-32 p-4 top-10 shadow-2xl bg-white cursor-pointer">
                <li>
                  <Button>
                    <Link className="text-black capitalize" to="/footwear/men">
                      Men
                    </Link>
                  </Button>
                </li>
                <li>
                  <Button>
                    <Link
                      className="text-black capitalize"
                      to="/footwear/women"
                    >
                      Women
                    </Link>
                  </Button>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Button>
              <Link to="/groceries" className="text-black capitalize">
                Groceries
              </Link>
            </Button>
          </li>
          <li>
            <Button>
              <Link to="/beauty" className="text-black capitalize">
                Beauty
              </Link>
            </Button>
          </li>

          {/* Shop Mega Menu */}
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter("shop")}
            onMouseLeave={handleMouseLeave}
          >
            <Button>
              <Link to="#" className="text-black capitalize">
                Shop <KeyboardArrowDown />
              </Link>
            </Button>
            {openDropdown === "shop" && (
              <div className="absolute w-[1200px] top-14 right-[10%]  shadow-xl cursor-pointer bg-white flex justify-around p-8">
                {["Fashion", "Electronics", "Home", "Beauty", "Sports"].map(
                  (category) => (
                    <ul key={category}>
                      <p className="font-semibold">{category}</p>
                      <li>
                        <Button>
                          <Link
                            className="text-black capitalize"
                            to={`/${category.toLowerCase()}/men`}
                          >
                            Men
                          </Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link
                            className="text-black capitalize"
                            to={`/${category.toLowerCase()}/women`}
                          >
                            Women
                          </Link>
                        </Button>
                      </li>
                    </ul>
                  )
                )}
              </div>
            )}
          </li>
        </ul>
      </div>

      {/* Support Section */}
      <div className="flex flex-col items-center">
        <span className="text-lg text-[#279a65] font-bold">1900-888</span>
        <span className="text-gray-600 flex items-center gap-2">
          <HeadsetIcon sx={{ fontSize: 35 }} /> 24/7 Support Center
        </span>
      </div>
    </div>
  );
}

export default Navigation;
