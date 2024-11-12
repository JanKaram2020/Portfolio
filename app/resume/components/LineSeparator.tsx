import React from "react";

const LineSeparator = () => {
  return (
    <hr
      className={"p-0 group-last:hidden"}
      style={{
        marginTop: 2,
        marginBottom: 2,
        borderTop: "dashed 1px",
        borderColor: "rgba(0, 0, 0, 0.2)",
        width: "98%",
      }}
    />
  );
};

export default LineSeparator;
