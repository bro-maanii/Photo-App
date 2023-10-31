"use client";
import React from "react";
import Tab from "./Tabs";

const page = ({
  searchParams: publicId,
}: {
  searchParams: { publicId: any };
}) => {
  const key = Object.keys(publicId)[0];

  return (
    <div>
      <h1 className="text-4xl text-bold mb-9 pt-2 pl-4 md:pl-0">EDIT</h1>

      <Tab src={key} />
    </div>
  );
};

export default page;
