import React from "react";
import { Link } from "react-router-dom";
const FeatureCategory = () => {
  const featurecategories = [
    {
      image: "https://api.spicezgold.com/download/file_1734525204708_fash.png",
      background: "#e3fffa",
      text: "Fashion",
      border: "black",
    },
    {
      image: "https://api.spicezgold.com/download/file_1734525218436_ele.png",
      background: "#feefea",
      text: "Electronics",
      border: "red",
    },
    {
      image: "https://api.spicezgold.com/download/file_1734525231018_bag.png",
      background: "#ffe8f8",
      text: "Bags",
      border: "orange",
    },
    {
      image: "https://api.spicezgold.com/download/file_1734525239704_foot.png",
      background: "#def3ff",
      text: "Footwear",
      border: "green",
    },
    {
      image: "https://api.spicezgold.com/download/file_1734525248057_gro.png",
      background: "#e3fffa",
      text: "Groceries",
      border: "yellow",
    },
    {
      image:
        "https://api.spicezgold.com/download/file_1734525255799_beauty.png",
      background: "#e3fffa",
      text: "Beauty",
      border: "pink",
    },
    {
      image: "https://api.spicezgold.com/download/file_1734525275367_well.png",
      background: "#e3fffa",
      text: "Wellness",
      border: "blue",
    },
    {
      image: "https://api.spicezgold.com/download/file_1734525286186_jw.png",
      background: "#e3fffa",
      text: "Jewellery",
      border: "brown",
    },
  ];

  return (
    <div className="mt-12">
      <h2 className="text-2xl ml-20 mb-0 font-medium">Featured Categories</h2>
      <ul className="flex justify-center gap-8 p-10">
        {featurecategories.map((item, index) => (
          <li key={index} className="group m-2 text-center">
            {/* Moving Circle */}
            <Link to="/">
              <div
                className="flex justify-center  items-center w-32 h-32 transition-all duration-300 ease-in-out group-hover:-translate-y-3 group-hover:shadow-lg"
                style={{
                  background: item.background,
                  borderRadius: "50%",
                  border: `1px solid ${item.border}`,
                  boxShadow: "0px 0px 15px rgba(0,0,0,0.2)", // Ensures shadow visibility
                }}
              >
                <img src={item.image} alt={item.text} className="w-15 h-15" />
              </div>
            </Link>

            <span className="text-[18px] font-medium block mt-5">
              {item.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureCategory;
