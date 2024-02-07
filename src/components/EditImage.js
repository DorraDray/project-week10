import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import EditImageButton from "../../components/EditProfileButton";

export default async function EditImage({ image }) {
  let imageResult = await sql`SELECT * FROM images`;
  let singleImage = imageResult.rows[0];

  async function handleEditImage() {
    "use server";
    if (file) {
      {
        singleImage.lenght == 0
          ? await sql`INSERT INTO images (name, data) VALUES (${file.name}, ${file})`
          : await sql`UPDATE images SET name = ${file.name}, data = ${file} WHERE id = 1`;
      }
    }

    // revalidate the path so the new item shows
    revalidatePath(`/`);
    // take me to the home pagen
    redirect(`/`);
  }
  return (
    <div>
      <form action={handleEditImage}>
        <EditImageButton />
      </form>
    </div>
  );
}
