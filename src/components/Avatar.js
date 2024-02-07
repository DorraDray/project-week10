"use client";
import * as Avatar from "@radix-ui/react-avatar";
import "./Avatar.css";

const AvatarProfile = ({ image }) => (
  <div style={{ display: "flex", gap: 20 }}>
    {console.log(
      <Avatar.Image
        className="AvatarImage"
        src={URL.createObjectURL(image)}
        alt="Colm Tuite"
      />
    )}
    <Avatar.Root className="AvatarRoot">
      <Avatar.Image
        className="AvatarImage"
        src={URL.createObjectURL(image)}
        alt="Colm Tuite"
      />
      <Avatar.Fallback className="AvatarFallback" delayMs={600}>
        CT
      </Avatar.Fallback>
    </Avatar.Root>
  </div>
);

export default AvatarProfile;
