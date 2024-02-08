"use client";
import React from "react";
import { CldUploadButton } from "next-cloudinary";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export type Uploadresult = {
  info: {
    public_id: string;
  };
  event: "success";
};

function UploadButton() {
  // for page refresh
  const router = useRouter();
  return (
    <Button asChild className="flex justify-between  ">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="hidden sm:flex sm:w-6 sm:h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
          />
        </svg>
        <CldUploadButton
          className=" rounded-xl p-2 sm:font-bold "
          // uploadPreset="thdvoy4v"
          uploadPreset="v15nmgol"
          onUpload={(result) => {
            let res = result as Uploadresult;
            setTimeout(() => {
              router.refresh();
            }, 1000);
          }}
        />
      </div>
    </Button>
  );
}

export default UploadButton;
