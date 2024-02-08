// EditImage.js
"use client";
import EditImageButton from "@/components/EditImageButton";
import { handleEditImage } from "@/serverActions/editImageServerAction";

export default function EditImage({ image }) {
  const handleEditImagewithparam = handleEditImage.bind(null, image);
  async function handleSubmit(event) {
    event.preventDefault();
    await handleEditImagewithparam(image);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <EditImageButton />
      </form>
    </div>
  );
}
