"use client";
import * as Avatar from "@radix-ui/react-avatar";
import "./Avatar.css";

const AvatarProfile = ({ image }) => (
  <div style={{ display: "flex", gap: 20 }}>
    {/* {console.log(
      <Avatar.Image
        className="AvatarImage"
        src={URL.createObjectURL(image)}
        alt="Colm Tuite"
      />
    )} */}
    {image ? (
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
    ) : (
      <Avatar.Root className="AvatarRoot">
        <Avatar.Image
          className="AvatarImage"
          src="https://lh3.googleusercontent.com/a/ACg8ocJN9vee9Qq3FTSmtC9lifOzAg0HtUrjNDyIsgUWy9GpsPb4=s432-c-no"
          alt="Colm Tuite"
        />
        <Avatar.Fallback className="AvatarFallback" delayMs={600}>
          CT
        </Avatar.Fallback>
      </Avatar.Root>
    )}
  </div>
);

export default AvatarProfile;
