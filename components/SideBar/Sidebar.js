import React, { useContext } from "react";
import "react-accessible-accordion/dist/fancy-example.css";
import { sortByFrequency } from "../../lib/sortFunction";
const Sidebar = ({ post, handleInput, handleSearch }) => {
  // filtering themename
  const filterThemeName = post.map((c) => c.themeName);
  const sortArrayByTheme = sortByFrequency(filterThemeName);
  const themeName = [...new Set(sortArrayByTheme)];

  return (
    <div className="w-1/3">
      <aside>
        <div className="w-2/3 mt-2">
          <div className="flex justify-between items-center mb-2">
            <input
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search..."
              className="bg-gray-200 appearance-none border-2 border-slate-300 rounded w-full py-2 px-4 text-gray-700 leading-tight  focus:outline-none focus:bg-white  "
              type="text"
            ></input>
          </div>
        </div>
        <div className={`w-2/3 flex  justify-between items-center border `}>
          <button
            className="  text-black rounded-sm py-3 px-4  w-full text-left flex justify-between"
            value="all"
            onClick={handleInput}
          >
            All <span>{post.length}</span>
          </button>
        </div>
        {themeName.map((p) => (
          <div
            key={p}
            className={`w-2/3 flex  justify-between items-center border `}
          >
            <button
              className="  text-black rounded-sm py-3 px-4  w-full text-left flex justify-between"
              value={p}
              onClick={(e) => handleInput(e.target.value)}
            >
              {p} <span>{post.filter((x) => x.themeName === p).length}</span>
            </button>
          </div>
        ))}
      </aside>
    </div>
  );
};

export default Sidebar;
