import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex justify-between bg-white   items-center fixed top-0 left-0 right-0 max-w-7xl mx-auto p-4">
      <div className="2xl font-semibold">Su Wint Thida @ Sylvia</div>
      <div className="flex gap-4">
        <div>Home</div>
        <div>About</div>
        <div>Experiments</div>
        <div>Resume</div>
      </div>
    </div>
  );
};

export default Navbar;
