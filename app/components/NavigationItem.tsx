import React from "react";

const NavigationItem = ({ navigationName }: { navigationName: string }) => {
  return (
    <li className="text-yellowishWhite cursor-pointer px-1 py-4 duration-300">
      {navigationName}
    </li>
  );
};

export default NavigationItem;
