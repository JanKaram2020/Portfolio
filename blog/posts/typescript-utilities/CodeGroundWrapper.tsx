import React from "react";

import { CodeGround } from "./CodeGround";
import formatCode from "../../utils/format-code";

const CodeGroundWrapper = async ({
  code,
  fileName,
}: {
  code: string;
  fileName: string;
}) => {
  const formattedCode = await formatCode(code);
  return <CodeGround code={formattedCode} fileName={fileName} />;
};

export default CodeGroundWrapper;
