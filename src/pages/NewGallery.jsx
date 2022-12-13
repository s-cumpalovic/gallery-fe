import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import CreateGalleryComponent from "../components/Gallery/CreateGalleryComponent";
import { selectSingleGallery } from "../store/gallery/selectors";
import {
  initStoreGallery,
  initGetSingleGallery,
  initEditGallery,
} from "../store/gallery/slice";
import { selectUser } from "../store/user/selectors";

export default function NewGallery() {
  const userData = useSelector(selectUser);
  const dispatch = useDispatch();

  const { id } = useParams();
  const history = useHistory();

  const [image, setImage] = useState("");
  const [newGallery, setNewGallery] = useState({
    userId: "",
    title: "",
    description: "",
    images: [],
  });

  useEffect(() => {
    if (userData.user) {
      setNewGallery({
        ...newGallery,
        userId: userData.user.id,
      });
      handleGetSingleGallery();
    }
  }, [userData]);

  const handleOnSubmitGallery = async (e) => {
    e.preventDefault();

    await dispatch(initStoreGallery(newGallery));
    history.push("/my-galleries");
  };

  const singleGallery = useSelector(selectSingleGallery);

  const handleGetSingleGallery = async () => {
    await dispatch(initGetSingleGallery(id));
    setNewGallery({
      userId: userData.user.id,
      title: singleGallery.title,
      description: singleGallery.description,
      images: singleGallery.images.map((imageData) => imageData.image_url),
    });
  };

  useEffect(() => {
    console.log(newGallery);
  }, [newGallery]);

  const handleEditGallery = async (e) => {
    e.preventDefault();

    await dispatch(initEditGallery({ id: id, newGallery: newGallery }));
    alert("Gallery edited succesfully!");
    history.push(`/galleries/${id}`);
  };

  return (
    <div>
      <CreateGalleryComponent
        newGallery={newGallery}
        setNewGallery={setNewGallery}
        onSubmitGallery={handleOnSubmitGallery}
        onEditGallery={handleEditGallery}
        image={image}
        setImage={setImage}
      />
      <div className="added-images">
        <h3>Images:</h3>
        {newGallery.images &&
          newGallery.images.map((image) => (
            <div key={image.index}>
              <p>{image}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
