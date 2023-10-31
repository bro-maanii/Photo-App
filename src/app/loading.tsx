import React from "react";

export default function Loading() {
  return (
    <div className="flex-1 space-y-4 mt-8">
      <div>
        <p className="text-4xl dark:text-white text-black font-bold">
          LOADING....
        </p>
      </div>
      <div>
        <p className="text-xl dark:text-white text-black  font-bold">
          Please Wait :)
        </p>
      </div>
    </div>
  );
}
