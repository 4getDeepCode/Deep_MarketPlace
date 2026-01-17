// export const uploadToCloudinary = async (pics:any) => {

//     const cloud_name ="ddejgimeh"
//     const upload_preset = "deepMarketPlace"

//     if (pics) {

//       const data = new FormData();
//       data.append("file", pics);
//       data.append("upload_preset", "ml_default");
//       data.append("cloud_name", cloud_name);

//       const res = await
//       fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, {
//         method: "post",
//         body: data,
//       })

//         const fileData=await res.json();
//         console.log("url : ", fileData);
//         return fileData.url

//     } else {
//       console.log("error");
//     }
//   };

export const uploadToCloudinary = async (file: File) => {
  const cloudName = "ddejgimeh";
  const uploadPreset = "deepMarketPlace"; // USE THIS

  if (!file) {
    throw new Error("No file provided");
  }

  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", uploadPreset);
  data.append("cloud_name", cloudName);

  try {
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: "POST",
        body: data,
      }
    );

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error?.error?.message || "Cloudinary upload failed");
    }

    const fileData = await res.json();
    console.log("Uploaded image URL:", fileData.secure_url);

    return fileData.secure_url; // ALWAYS use secure_url
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    throw error;
  }
};
