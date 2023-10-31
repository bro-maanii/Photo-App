import React from "react";
import { CldImage } from "next-cloudinary";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Tab({ src }: { src: string }) {
  return (
    <Tabs defaultValue="original" className="py-4 px-3 w-full">
      <div className="flex flex-col">
        <TabsList className="grid w-full grid-cols-3 ">
          <TabsTrigger value="original" className="text-xs sm:text-base">
            Original
          </TabsTrigger>
          <TabsTrigger value="blur" className="text-xs sm:text-base">
            Blur
          </TabsTrigger>
          <TabsTrigger value="oilPaint" className="text-xs sm:text-base">
            OilPaint
          </TabsTrigger>
        </TabsList>
        <TabsList className="grid w-full grid-cols-3 ">
          <TabsTrigger value="tint" className="text-xs sm:text-base">
            Tint
          </TabsTrigger>
          <TabsTrigger
            value="gradientFade"
            className="text-[10px] sm:text-base"
          >
            GradientFade
          </TabsTrigger>
          <TabsTrigger value="ZoomIn" className="text-xs sm:text-base">
            Zoom In
          </TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="original">
        <div className="flex w-full justify-center items-center">
          <CldImage
            width="500"
            height="400"
            src={src}
            alt="Description of my image"
          />
        </div>
      </TabsContent>
      {/* blur */}
      <TabsContent value="blur">
        <div className="flex flex-col w-full xl:flex-row gap-3 justify-center items-center">
          <CldImage
            width="500"
            height="400"
            src={src}
            alt="Description of my image"
          />
          <CldImage
            width="500"
            height="400"
            src={src}
            alt="Description of my image"
            effects={[{ blur: "1200" }]}
          />
        </div>
      </TabsContent>
      {/* oilPaint*/}
      <TabsContent value="oilPaint">
        <div className="flex flex-col w-full xl:flex-row gap-3 justify-center items-center">
          <CldImage
            width="500"
            height="400"
            src={src}
            alt="Description of my image"
          />
          <CldImage
            width="500"
            height="400"
            src={src}
            alt="Description of my image"
            effects={[{ oilPaint: "50" }]}
          />
        </div>
      </TabsContent>
      {/* tint*/}
      <TabsContent value="tint">
        <div className="flex flex-col w-full xl:flex-row gap-3 justify-center items-center">
          <CldImage
            width="500"
            height="400"
            src={src}
            alt="Description of my image"
          />
          <CldImage
            width="500"
            height="400"
            src={src}
            alt="Description of my image"
            effects={[{ tint: "equalize:80:blue:blueviolet" }]}
          />
        </div>
      </TabsContent>
      {/* gradientFade*/}
      <TabsContent value="gradientFade">
        <div className="flex flex-col w-full xl:flex-row gap-3 justify-center items-center">
          <CldImage
            width="500"
            height="400"
            src={src}
            alt="Description of my image"
          />

          <CldImage
            width="500"
            height="400"
            src={src}
            alt="Description of my image"
            effects={[
              {
                background: "pink",
              },
              {
                gradientFade: true,
              },
              {
                gradientFade: "symmetric:2,x_0.1,y_0.2",
              },
            ]}
          />
        </div>
      </TabsContent>
      {/* ZoomIn*/}
      <TabsContent value="ZoomIn">
        <div className="flex flex-col w-full xl:flex-row gap-3 justify-center items-center">
          <CldImage
            width="500"
            height="400"
            src={src}
            alt="Description of my image"
          />

          <CldImage
            width="500"
            height="400"
            src={src}
            alt="Description of my image"
            zoompan="loop"
          />
        </div>
      </TabsContent>
    </Tabs>
  );
}

export default Tab;
