import { ReactNode } from 'react';

const ListItemColor = ({ children }: { children: ReactNode }) => (
  <li className="before:(content-['•'] text-red-400 mr-10px)">{children}</li>
);
export default ListItemColor;
