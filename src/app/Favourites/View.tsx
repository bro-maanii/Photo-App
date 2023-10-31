"use client";
import React from "react";
import { CldImage } from "next-cloudinary";
import Heart from "../Components/symbols/Heart";
import { useState, useEffect } from "react";
import { Add2Fav } from "../Gallery/Action";
import { AiFillHeart } from "react-icons/ai";

function View({ src, tag, fun }: { src: string; tag: string[]; fun: any }) {
  const [favt, setfavt] = useState(tag.includes("fav"));
  return (
    <div className="relative">
      {/* image */}
      <CldImage
        className="rounded border-blue-200 border-4"
        width="400"
        height="300"
        src={src}
        alt="Description of my image"
      />
      {/* heart symbol */}

      <div
        className="absolute top-2 right-2"
        onClick={() => {
          fun(src);
          setfavt(!favt);
          Add2Fav(src, favt);
        }}
      >
        {favt ? (
          <>
            <AiFillHeart className="mr-2 h-8 w-8 text-red-500 hover:h-9 hover:w-9 cursor-pointer " />
          </>
        ) : (
          <Heart />
        )}
      </div>
    </div>
  );
}

export default View;
