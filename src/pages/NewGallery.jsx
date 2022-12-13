import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateGalleryComponent from "../components/Gallery/CreateGalleryComponent";
import { galleryService } from "../services/GalleryService";
import { initStoreGallery } from "../store/gallery/slice";
import { selectUser } from "../store/user/selectors";

export default function NewGallery() {
  const [image, setImage] = useState("");
  const [newGallery, setNewGallery] = useState({
    userId: "",
    title: "",
    description: "",
    images: "",
  });

  const userData = useSelector(selectUser);

  useEffect(() => {
    if (userData.user) {
      setNewGallery({
        ...newGallery,
        userId: userData.user.id,
      });
    }
  }, [userData]);

  const dispatch = useDispatch();

  const handleOnSubmitGallery = async (e) => {
    e.preventDefault();

    await dispatch(initStoreGallery(newGallery));
  };

  return (
    <div>
      <CreateGalleryComponent
        newGallery={newGallery}
        setNewGallery={setNewGallery}
        onSubmitGallery={handleOnSubmitGallery}
        image={image}
        setImage={setImage}
      />
      {newGallery.images && <h6>Images:</h6> &&
        newGallery.images.map((image) => (
          <div>
            <p>{image}</p>
          </div>
        ))}
    </div>
  );
}
