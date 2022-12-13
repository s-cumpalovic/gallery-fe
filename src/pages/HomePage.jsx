// React imports
import React, { useEffect, useState } from "react";
import GalleryComponent from "../components/Gallery/GalleryComponent";
import SearchBar from "../components/Gallery/SearchBar";
import { useParams } from "react-router-dom";

// Redux imports
import { useDispatch, useSelector } from "react-redux";
import { selectAllGalleries } from "../store/gallery/selectors";
import { initGetGalleries } from "../store/gallery/slice";
import { selectUser } from "../store/user/selectors";
import { galleryService } from "../services/GalleryService";

export default function HomePage() {
  const dispatch = useDispatch();
  const galleries = useSelector(selectAllGalleries);

  const { id } = useParams();
  const [term, setTerm] = useState();
  const [page, setPage] = useState(1);

  /* Data for my-galleries route */
  const myGalleriesHref = "http://localhost:3000/my-galleries";
  const user = useSelector(selectUser);
  let selfId = "";
  if (user.user) {
    selfId = user.user.id;
  }

  useEffect(() => {
    handleGetGalleries();
    console.log(page);
  }, [term, id, selfId, page]);

  const handleGetGalleries = async () => {
    if (window.location.href == myGalleriesHref) {
      await dispatch(initGetGalleries({ page: page, term: term, id: selfId }));
    } else {
      await dispatch(initGetGalleries({ page: page, term: term, id: id }));
    }
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
            author={gallery.user}
            createdAt={gallery.created_at}
          />
        ))
      ) : (
        <h3>No galleries at this moment"</h3>
      )}
      <div className="pagination-buttons">
        <button
          className="btn btn-primary"
          onClick={() => setPage((prevPage) => prevPage - 1)}
        >
          Prev page
        </button>
        <button
          className="btn btn-primary"
          onClick={() => setPage((prevPage) => prevPage + 1)}
        >
          Next page
        </button>
      </div>
    </div>
  );
}
