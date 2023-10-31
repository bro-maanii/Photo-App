"use client";
import React, { useEffect, useState } from "react";
import View from "./View";
import { MyImage } from "./page";

function Fav_List({ resources }: { resources: MyImage[] }) {
  const [initialState, setInitialState] = useState(resources);
  useEffect(() => {
    setInitialState(resources);
  }, [resources]);
  return (
    <div className="columns-2 sm:columns-3 lg:columns-4 space-y-5 mx-3 pt-6">
      {initialState.map((item, i) => {
        return (
          <div key={i} className="">
            <View
              src={item.public_id}
              tag={item.tags}
              fun={(publicId: string) => {
                setInitialState((current) =>
                  current.filter((val) => val.public_id !== publicId)
                );
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Fav_List;
