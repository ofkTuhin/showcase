import React from "react";

import Navbar from "../Navbar/Navbar";

const Layout = ({ children, setShowAllData }) => {
  return (
    <div>
      <Navbar setShowAllData={setShowAllData}></Navbar>
      {children}
    </div>
  );
};

export default Layout;
