'use client'

import { UploadButton } from "@/utils/uploadthing";
import { useState } from "react";


const ImageUpload = () => {
    const [imageUrl,setImageUrl] = useState<string>('');


  return (
    <div>
        <UploadButton endpoint="imageUploader" onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}/>

      

        {imageUrl.length ? (
            <div>

                
                


            </div>

            


        ): null}

    
          
    </div>

  )
}

export default ImageUpload;
