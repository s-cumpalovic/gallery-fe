import React, { useState } from "react";
import CreateGalleryComponent from "../components/Gallery/CreateGalleryComponent";

export default function NewGallery() {
  const [newGallery, setNewGallery] = useState({
    title: "",
    description: "",
    images: [],
  });

  const handleOnSubmitGallery = async (e) => {
    e.preventDefault();

    console.log(newGallery);
  };

  return (
    <div>
      <CreateGalleryComponent
        newGallery={newGallery}
        setNewGallery={setNewGallery}
        onSubmitGallery={handleOnSubmitGallery}
      />
    </div>
  );
}
