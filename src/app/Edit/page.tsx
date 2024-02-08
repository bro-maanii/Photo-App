"use client";
import React from "react";
import DemoTab from "./Tabs";

const page = ({
  searchParams: {publicId},
}: {
  searchParams: { publicId: string  };
}) => {
  // const key = Object.keys(publicId)[0];
  // console.log(publicId)
  return (
    <>
    <div>
      <h1 className="text-4xl text-bold mb-9 pt-2 pl-4 md:pl-0">EDIT</h1>
      <DemoTab src={publicId} />
    </div>
    
    </>
  );
};

export default page;
