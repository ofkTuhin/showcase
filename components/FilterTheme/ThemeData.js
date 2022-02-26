import React from "react";

const ThemeData = ({ posts, handleFilter, select }) => {
  return (
    <div className="flex justify-between py-8 px-4">
      <div>All Theme ({posts.length})</div>
      <div>
        <select
          onChange={(e) => handleFilter(e.target.value)}
          className="px-5 py-2 outline-0 border"
        >
          {select ? (
            <option value="all" selected>
              All
            </option>
          ) : (
            <option value="all">All</option>
          )}
          <option value="7">7 days</option>
        </select>
      </div>
    </div>
  );
};

export default ThemeData;
