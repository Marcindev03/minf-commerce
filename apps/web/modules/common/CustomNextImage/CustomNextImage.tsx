"use client";
import Image, { ImageProps } from "next/image";
import { FC, useState } from "react";
import { generateBlurDataUrl } from "./placeholder";

type CustomNextImageProps = {} & ImageProps;

export const CustomNextImage: FC<CustomNextImageProps> = (props) => {
  const [quality, setQuality] = useState(10);

  const handleImageLoad = () => {
    if (quality === 75) {
      return;
    }

    setQuality(75);
  };

  const {width, height} = props

  return <Image {...props} quality={quality} onLoad={handleImageLoad} placeholder="blur" blurDataURL={generateBlurDataUrl(width as number, height as number)} />;
};