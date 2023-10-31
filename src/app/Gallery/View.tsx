"use client";
import React from "react";
import { CldImage } from "next-cloudinary";
import Heart from "../Components/symbols/Heart";
import { useState, useEffect } from "react";
import { Add2Fav } from "./Action";
import { AiFillHeart } from "react-icons/ai";
import { EditIcon } from "lucide-react";
import Link from "next/link";

function View({ src, tag }: { src: string; tag: string[] }) {
  const [favt, setfavt] = useState(tag.includes("fav"));
  return (
    <div className="relative">
      {/* image */}
      <CldImage
        className="rounded  border-blue-200 border-4  h-auto"
        width="400"
        height="300"
        src={src}
        alt="Description of my image"
      />
      {/* heart symbol */}

      <div
        className="absolute top-2 right-2"
        onClick={() => {
          setfavt(!favt);
          Add2Fav(src, favt);
        }}
      >
        {favt ? (
          <>
            <AiFillHeart className="sm:mr-2 h-6 w-6 sm:h-8 sm:w-8 text-red-500 hover:h-9 hover:w-9 cursor-pointer " />
          </>
        ) : (
          <Heart />
        )}
      </div>

      {/* Edit icon */}
      <Link href={`/Edit/?${src}`}>
        <div className="absolute top-2 left-2">
          <EditIcon className="sm:mr-2 h-6 w-6 sm:h-8 sm:w-8 hover:text-red-500  cursor-pointer " />
        </div>
      </Link>
    </div>
  );
}

export default View;
