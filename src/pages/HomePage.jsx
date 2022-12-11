// React imports
import React, { useEffect, useState } from "react";
import GalleryComponent from "../components/Gallery/GalleryComponent";
import SearchBar from "../components/Gallery/SearchBar";

// Redux imports
import { useDispatch, useSelector } from "react-redux";
import { selectAllGalleries } from "../store/gallery/selectors";
import { initGetGalleries } from "../store/gallery/slice";

export default function HomePage() {
  const dispatch = useDispatch();
  const galleries = useSelector(selectAllGalleries);
  const [term, setTerm] = useState("");

  useEffect(() => {
    handleGetGalleries(term);
  }, [term]);

  const handleGetGalleries = async (term) => {
    await dispatch(initGetGalleries(term));
  };

  return (
    <div>
      <SearchBar term={term} setTerm={setTerm} />
      {galleries ? (
        galleries.map((gallery) => (
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
      ) : (
        <h3>No galleries at this moment"</h3>
      )}
    </div>
  );
}
