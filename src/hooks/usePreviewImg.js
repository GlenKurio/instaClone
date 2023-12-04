import { useState } from "react";
import useShowToast from "./useShowToast";

function usePreviewImg() {
  const [selectedFile, setSelectedFile] = useState(null);
  const showToast = useShowToast();
  const maxFileSizeInBytes = 2 * 1024 * 1024; // 2MB

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file && file.type.startsWith("image/")) {
      if (file.size > maxFileSizeInBytes) {
        showToast(
          "Error",
          "File is too big. Should be less than 2MB.",
          "error"
        );
        setSelectedFile(null);
        return;
      }
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onloadend = () => {
        setSelectedFile(reader.result);
      };
    } else {
      showToast("Error", "Please select an image file", "error");
      selectedFile(null);
    }
  };

  return { selectedFile, handleImageChange, setSelectedFile };
}

export default usePreviewImg;
