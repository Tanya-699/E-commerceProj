import React, { useState } from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { KeyboardArrowDown } from "@mui/icons-material";

function SelectDropdown({ data = [], placeholder }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpenselect, setisOpenSelect] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(placeholder);

  console.log("Data received:", data); // Debugging

  const filteredCategories = data.filter(
    (category) =>
      typeof category === "string" &&
      category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openSelect = () => {
    setisOpenSelect(true);
  };

  const closeSelect = (category) => {
    setSelectedCategory(category);
    setisOpenSelect(false);
  };

  return (
    <ClickAwayListener onClickAway={() => setisOpenSelect(false)}>
      <div className="relative cursor-pointer">
        <span className=" pr-2" onClick={openSelect} style={{ color: "green" }}>
          {" "}
          {selectedCategory.length > 12
            ? selectedCategory.substr(0, 12) + "..."
            : selectedCategory}
        </span>
        <KeyboardArrowDown />

        {isOpenselect && (
          <div className="h-48 absolute  top-10 p-2 overflow-y-auto w-60 rounded-md shadow-lg scroll-mx-9 bg-white">
            <input
              type="text"
              className="border-2 w-full p-1 mb-2 rounded opacity-60"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul>
              {filteredCategories.length > 0 ? (
                filteredCategories.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => closeSelect(item)}
                    className={`p-1 hover:bg-emerald-500 hover:rounded-sm cursor-pointer ${
                      selectedCategory === item ? "active" : ""
                    }`}
                  >
                    {item}
                  </li>
                ))
              ) : (
                <li className="text-gray-700 p-1">No results found</li>
              )}
            </ul>
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
}

export default SelectDropdown;
