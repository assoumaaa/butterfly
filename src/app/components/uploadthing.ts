import { OurFileRouter } from "../components/uploadthings/core";

import { generateComponents } from "@uploadthing/react";
 
 
export const { UploadButton, UploadDropzone, Uploader } =
  generateComponents<OurFileRouter>();