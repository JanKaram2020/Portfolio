"use client";

import MySandpack from "blog/components/MySandpack";

export const CodeGround = ({
  code,
  fileName,
}: {
  code: string;
  fileName: string;
}) => {
  return (
    <MySandpack
      template={"react-ts"}
      editor={false}
      filesTab={false}
      files={{
        [fileName]: code,
      }}
    />
  );
};
