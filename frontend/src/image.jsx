import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

import { fill } from "@cloudinary/url-gen/actions/resize";
import { cn } from "./lib/utils";

const extractPublicId = (fullUrl) => {
  const parts = fullUrl.split("/upload/")[1];
  return parts.replace(/\.(jpg|jpeg|png|webp|gif)$/, "");
};

const Image = ({
  src,
  width = 200,
  height = 200,
  alt = "Image",
  className,
}) => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dsog4glvp",
    },
  });

  const myImage = cld.image(extractPublicId(src));

  myImage
    .resize(fill().height(height).width(width))
    .format("auto")
    .quality("auto");

  return (
    <AdvancedImage
      cldImg={myImage}
      className={cn("bg-accent/50 rounded-md object-cover", className)}
      style={{ height, width }}
      alt={alt}
    />
  );
};

export default Image;
