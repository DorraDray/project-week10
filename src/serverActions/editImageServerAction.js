// editImageServerAction.js
"use server";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function handleEditImage(file) {
  if (file) {
    let imageResult = await sql`SELECT * FROM images`;
    let singleImage = imageResult.rows[0];

    if (!singleImage) {
      await sql`INSERT INTO images (name, data) VALUES (${file.name}, ${file})`;
    } else {
      await sql`UPDATE images SET name = ${file.name}, data = ${file} WHERE id = 1`;
    }
  }

  // revalidate the path so the new item shows
  revalidatePath(`/`);
  // take me to the home page
  redirect(`/`);
}
