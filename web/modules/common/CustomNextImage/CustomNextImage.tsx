"use client";
import Image, { ImageProps } from "next/image";
import { FC, useState } from "react";

type CustomNextImageProps = {} & ImageProps;

export const CustomNextImage: FC<CustomNextImageProps> = (props) => {
  const [quality, setQuality] = useState(10);

  const handleImageLoad = () => {
    if (quality === 75) {
      return;
    }

    setQuality(75);
  };

  return <Image {...props} quality={quality} onLoad={handleImageLoad} />;
};
