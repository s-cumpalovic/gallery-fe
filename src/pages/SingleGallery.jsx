// React imports
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import GalleryComponent from "../components/Gallery/GalleryComponent";

// Redux imports
import { useDispatch, useSelector } from "react-redux";
import { selectSingleGallery } from "../store/gallery/selectors";
import { initGetSingleGallery } from "../store/gallery/slice";
import CarouselComponent from "../components/Gallery/Carousel";

export default function SingleGallery() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const gallery = useSelector(selectSingleGallery);

  useEffect(() => {
    handleGetGallery();
  }, []);

  const handleGetGallery = async () => {
    await dispatch(initGetSingleGallery(id));
  };
  return (
    <div>
      {gallery && (
        <GalleryComponent
          key={gallery.id}
          title={gallery.title}
          description={gallery.description}
        />
      )}
      {gallery.images && <CarouselComponent images={gallery.images} />}
    </div>
  );
}
