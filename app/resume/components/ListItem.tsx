import React, { ReactNode } from "react";

const ListItem = ({ children }: { children: ReactNode }) => {
  return (
    <li className="m-0 p-0 before:(content-['•'] text-2xl text-gray-700 m-0 p-0 leading-none)">
      &nbsp;{children}
    </li>
  );
};

export default ListItem;
