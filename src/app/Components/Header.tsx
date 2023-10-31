import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LoaderIcon } from "lucide-react";
import { ModeToggle } from "@/components/ui/mode-toggle";
import Image from "next/image";
import p1 from "@/logo-pic/camera-icon.png";

function Header() {
  return (
    <div className="flex-col flex">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <Image
            src={p1}
            width={60}
            height={60}
            className="bg-transparent rounded-full"
            alt="LOGO"
          />
          <p className="first-letter:text-blue-900 first-letter:font-extrabold font-medium first-letter:text-3xl sm:first-letter:text-5xl text-base sm:text-xl">
            PHOTO APP
          </p>

          <div className="ml-auto flex items-center space-x-4">
            <div className="hover:rotate-6">
              <ModeToggle />
            </div>
            <Avatar className="cursor-pointer hover:rotate-6 hover:delay-500 ">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>
                <LoaderIcon />{" "}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
