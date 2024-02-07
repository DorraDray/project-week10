"use client";
import { useFormStatus } from "react-dom";

export default function EditImageButton() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} className={pending ? "disabled" : ""}>
      {pending ? "Editing your Image" : "Edit Image"}
    </button>
  );
}
