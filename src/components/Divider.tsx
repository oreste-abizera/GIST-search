import React from "react";

type Props = {
  children: React.ReactNode;
};

const Divider = ({ children }: Props) => {
  return (
    <div className="divider">
      <span></span>
      <p>{children}</p>
      <span></span>
    </div>
  );
};

export default Divider;
