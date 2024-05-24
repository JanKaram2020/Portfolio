import { DetailedHTMLProps, HTMLAttributes } from "react";
import { mergeClasses } from "../lib/mergeClasses";

type Element<T> = DetailedHTMLProps<HTMLAttributes<T>, T>;

const ListItemColor = ({
  className,
  children,
  ...props
}: Element<HTMLLIElement>) => (
  <li
    className={mergeClasses(
      "before:(content-['•'] text-red-400 mr-10px)",
      className,
    )}
    {...props}
  >
    {children}
  </li>
);

export default ListItemColor;
