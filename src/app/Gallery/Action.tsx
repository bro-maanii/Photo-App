"use server";

import cloudinary from "cloudinary";

export async function Add2Fav(public_id: string, fav: boolean) {
  if (fav) {
    await cloudinary.v2.uploader.remove_tag("fav", [public_id]);
  } else {
    await cloudinary.v2.uploader.add_tag("fav", [public_id]);
  }
}
