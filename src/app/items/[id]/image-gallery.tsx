"use client";

import {useState} from "react";

import Image from "next/image";

export default function ImageGallery({images}: {images: string[]}) {
  const [mainImage, setMainImage] = useState<string>(images[0]);

  function getImage(img: string) {
    return (
      <>
        {mainImage === img ? (
          <Image
            src={img}
            alt="Image of a product"
            width={80}
            height={80}
            className="aspect-square object-fill rounded-full border-blue-400 border-[3px]"
          ></Image>
        ) : (
          <Image
            src={img}
            alt="Image of a product"
            width={80}
            height={80}
            className="aspect-square object-fill rounded-full"
          ></Image>
        )}
      </>
    );
  }
  return (
    <article className="flex flex-col items-center gap-4">
      <Image
        src={mainImage}
        alt="Image of a product"
        width={150}
        height={150}
        className="aspect-square rounded-full"
      />
      <div className="flex gap-3">
        {images.map((img, i) => (
          <button key={i} onClick={(e) => setMainImage(img)}>
            {getImage(img)}
          </button>
        ))}
      </div>
    </article>
  );
}
