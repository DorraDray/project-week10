"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import EditImage from "./EditImage";
//install this library via "npm install --save react-dropzone"
// {useDropzone} hook comes from this library

export default function DropzoneAvatar() {
  const [files, setFiles] = useState([]);
  //create state for files using useState in order to show the user a preview of the selected files, letting them know the file has been recieved
  //initialised as an empty array

  const onDrop = useCallback((acceptedFiles) => {
    //receives both accepted and rejected files (if stipulations made)
    if (acceptedFiles?.length) {
      //if the accepted file exists (if its length is true)
      setFiles(acceptedFiles);
      // Accept only the first accepted file
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": [],
    },
    // maxSize: 1024 * 1000,
    onDrop,
  });
  // useDropzone mainly gives us back two functions: getRootProps and getInputProps
  //hook is called with callback function "onDrop", executed when a user drops a file

  return (
    <>
      <div {...getRootProps()} className="div">
        <input {...getInputProps()} />

        <p>Change Image</p>
      </div>

      {files.length === 0 ? (
        <p>No image selected yet</p>
      ) : (
        <EditImage image={files} />
      )}
    </>
  );
}
