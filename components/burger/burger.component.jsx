import React from "react";

const Burger = ({ open, setOpen }) => {
  return (
    <div className="toggle" open={open} onClick={() => setOpen(!open)}>
      <div className="bar bar-first"></div>
      <div className="bar bar-second"></div>
      <div className="bar bar-third"></div>
    </div>
  );
};

export default Burger;
