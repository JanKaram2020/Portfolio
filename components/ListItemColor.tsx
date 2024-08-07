import { DetailedHTMLProps, HTMLAttributes } from "react";
import { mergeClasses } from "../lib/mergeClasses";

type ListItemColorProps = DetailedHTMLProps<
  HTMLAttributes<HTMLLIElement>,
  HTMLLIElement
>;

const ListItemColor = ({
  className,
  children,
  ...props
}: ListItemColorProps) => (
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
