"use client";

import {
  Facebook,
  Instagram,
  LinkedinIcon,
  MailIcon,
  PhoneCall,
  TwitterIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import p1 from "@/logo-pic/camera-icon.png";
import p2 from "@/logo-pic/home-pic.jpg";

export type Uploadresult = {
  info: {
    public_id: string;
  };
  event: "success";
};
export default function Home() {
  return (
    <div className="flex flex-col-reverse lg:grid grid-cols-3 grid-flow-row lg:grid-flow-col gap-x-14">
      <div className=" gap-y-10">
        {/* image logo */}
        <div className="flex justify-around align-middle pt-5">
          <Image
            src={p1}
            width={150}
            height={250}
            className="bg-transparent drop-shadow-2xl hover:rotate-12 hover:hue-rotate-15 rounded-full outline-dotted"
            alt="LOGO"
          />
        </div>
        {/* name of app */}
        <div className="flex justify-evenly items-center   pt-9">
          <h1 className=" first-letter:text-blue-700 first-letter:font-extrabold sm:first-letter:text-6xl first-letter:text-4xl sm:text-2xl text-xl">
            PhotoApp
          </h1>
        </div>
        {/* paragraph  */}
        <p className="flex justify-center items-center pt-5 pl-5 capitalize font-extralight">
          Photo editing app that enhances, colorizes, cartoonize your images in
          seconds.{" "}
        </p>
        {/* social media links */}
        <h1 className="flex justify-center align-middle pt-6">Follow Us on:</h1>
        <div className="flex justify-center align-middle flex-wrap gap-2 py-10">
          <Link
            href="https://www.linkedin.com/in/eman-ali-abbasi-937932237/"
            target="_blank"
          >
            <Button
              variant="ghost"
              className="flex justify-end rounded-full p-3  bg-blue-600 hover:bg-blue-700 hover:shadow-2xl "
            >
              <LinkedinIcon />
            </Button>
          </Link>

          <Link href="https://www.instagram.com/maani__31/" target="_blank">
            <Button
              variant="ghost"
              className="flex justify-end rounded-full p-3  bg-red-500 hover:bg-red-600 hover:shadow-xl"
            >
              <Instagram />
            </Button>
          </Link>
          <Link
            href="https://www.facebook.com/eman.aliabbasi.5"
            target="_blank"
          >
            <Button
              variant="ghost"
              className="flex justify-end rounded-full p-3  bg-blue-600 hover:bg-blue-700 hover:shadow-xl"
            >
              <Facebook />
            </Button>
          </Link>
          <Link href={`tel:${+92 - 3062662261}`}>
            <Button
              variant="ghost"
              className="flex justify-end rounded-full p-3  bg-green-600 hover:bg-green-700 hover:shadow-xl"
            >
              <PhoneCall />
            </Button>
          </Link>
          <Link href="/">
            <Button
              variant="ghost"
              className="flex justify-end rounded-full p-3 bg-blue-600 hover:bg-blue-700 hover:shadow-xl"
            >
              <TwitterIcon />
            </Button>
          </Link>
          <Link href="mailto:alie15425@gmail.com">
            <Button
              variant="ghost"
              className="flex justify-end rounded-full p-3 bg-slate-300 hover:bg-slate-400 hover:shadow-xl"
            >
              <MailIcon />
            </Button>
          </Link>
        </div>
      </div>
      {/* Image Home page wali */}
      <div className="col-span-2 flex justify-center align-middle">
        <Image
          src={p2}
          width={300}
          height={400}
          className="bg-transparent w-[400px] h-[250px] pt-5 md:pt-0 lg:w-[600px] lg:h-full drop-shadow-2xl "
          alt="LOGO"
        />
      </div>
    </div>
  );
}
