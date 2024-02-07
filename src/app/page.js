import { sql } from "@vercel/postgres";
import Avatar from "./components/Avatar";
import DropzoneAvatar from "./components/DropzoneAvatar";
export default async function Home() {
  const image = await sql`SELECT * FROM images`;
  return (
    <div>
      <h1>Upload Files</h1>
      <DropzoneAvatar />
      <Avatar image={image.rows.data} />
    </div>
  );
}
