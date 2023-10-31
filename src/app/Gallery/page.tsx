import React from "react";
import UploadButton from "./Upload_Button";
import cloudinary from "cloudinary";
import View from "./View";

interface MyImage {
  public_id: string;
  tags: string[];
}

async function page() {
  const result = (await cloudinary.v2.search
    .expression("resource_type:image ")
    .sort_by("public_id", "desc")
    .with_field("tags")
    .execute()) as { resources: MyImage[] };

  return (
    <div className="pl-4 md:pl-0">
      <div className="flex justify-between pt-4 pr-4">
        <h1 className="text-3xl sm:text-2xl md:text-4xl font-semibold">
          Gallery
        </h1>
        <UploadButton />
      </div>
      <div className="columns-2 sm:columns-3 lg:columns-4 space-y-5 mx-3 pt-6">
        {result.resources.map((item, i) => {
          return (
            <div key={i} className="">
              <View src={item.public_id} tag={item.tags} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default page;
