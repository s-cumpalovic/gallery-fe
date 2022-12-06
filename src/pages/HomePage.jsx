// React imports
import React, { useEffect } from "react";
import GalleryComponent from "../components/Gallery/GalleryComponent";

// Redux imports
import { useDispatch, useSelector } from "react-redux";
import { selectAllGalleries } from "../store/gallery/selectors";
import { initGetGalleries } from "../store/gallery/slice";

export default function HomePage() {
  const dispatch = useDispatch();
  const galleries = useSelector(selectAllGalleries);

  useEffect(() => {
    handleGetGalleries();
  }, []);

  const handleGetGalleries = async () => {
    await dispatch(initGetGalleries());
  };

  return (
    <div>
      {galleries
        ? galleries.map((gallery) => (
            <GalleryComponent
              key={gallery.id}
              id={gallery.id}
              title={gallery.title}
              description={gallery.description}
              image={gallery.images[0].image_url}
            />
          ))
        : "No galleries at this moment"}
    </div>
  );
}
