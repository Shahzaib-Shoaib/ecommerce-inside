import React, { FC } from "react";
import TopBar from "./TopBar";
import Navbar from "./Navbar";

const Header: FC = () => {
  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <TopBar />
      <Navbar />
    </header>
  );
};

export default Header;
