import React from "react";

import cloudinary from "cloudinary";
import Fav_List from "./Fav_List";

export interface MyImage {
  public_id: string;
  tags: string[];
}

async function page() {
  const result = (await cloudinary.v2.search
    .expression("resource_type:image && tags:fav ")
    .sort_by("public_id", "desc")
    .with_field("tags")
    .execute()) as { resources: MyImage[] };

  return (
    <div className="pl-4 md:pl-0">
      <div className="flex justify-between pt-4 pr-4">
        <h1 className="text-3xl sm:text-2xl md:text-4xl font-semibold">
          Favourites
        </h1>
      </div>
      <Fav_List resources={result.resources} />
    </div>
  );
}

export default page;
