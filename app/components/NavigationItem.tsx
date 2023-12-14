import React from "react";

const NavigationItem = ({ navigationName }: { navigationName: string }) => {
  return (
    <li className="cursor-pointer px-2 py-4 text-yellowishWhite duration-300">
      {navigationName}
    </li>
  );
};

export default NavigationItem;
