import React, { ReactNode } from "react";

const SectionHeading = ({
  children,
  print = "block",
  ...props
}: {
  children: ReactNode;
  print?: "hidden" | "block";
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>) => {
  return (
    <>
      <h3
        className={`text-xl print:text-lg font-bold leading-[1.2] print:${print}`}
        {...props}
      >
        {children}
      </h3>
      <hr className="print:border print:border-gray-200 my-1 border-[2px] rounded" />
    </>
  );
};

export default SectionHeading;
