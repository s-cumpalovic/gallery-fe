// React imports
import React, { useEffect } from "react";
import GalleryComponent from "../components/Gallery/GalleryComponent";

// Redux imports
import { useDispatch, useSelector } from "react-redux";
import { selectAllGalleries } from "../store/gallery/selectors";
import { initGetGalleries, initRefreshToken } from "../store/gallery/slice";
import { authService } from "../services/AuthService";

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
              mainImage={gallery.images[0].image_url}
              authorName={gallery.user.first_name}
              authorSurname={gallery.user.last_name}
              createdAt={gallery.created_at}
            />
          ))
        : "No galleries at this moment"}
    </div>
  );
}
