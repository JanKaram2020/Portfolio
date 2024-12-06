import Image from "next/image";
import React from "react";
import type { IImage } from "./types";

const ProjectImage = ({ image, title }: { image: IImage; title: string }) => (
  <div className={"w-full flex items-center justify-center"}>
    <Image
      id={image}
      src={image}
      width={900}
      height={380}
      objectFit="cover"
      alt={`screenshots of ${title} on different devices`}
    />
  </div>
);

export default ProjectImage;
