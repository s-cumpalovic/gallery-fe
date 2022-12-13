// React imports
import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import GalleryComponent from "../components/Gallery/GalleryComponent";
import { ConditionalWrapper } from "../components/Wrappers/ConditionalWrapper";
import DeleteButton from "../components/Buttons/DeleteButton";
// Redux imports
import { useDispatch, useSelector } from "react-redux";
import { selectSingleGallery } from "../store/gallery/selectors";
import { selectUser } from "../store/user/selectors";
import {
  initAddComment,
  initDeleteGallery,
  initGetSingleGallery,
} from "../store/gallery/slice";
import CommentComponent from "../components/Gallery/CommentComponent";
import { galleryService } from "../services/GalleryService";

export default function SingleGallery() {
  const { id } = useParams();
  const history = useHistory();
  const [newComment, setNewComment] = useState({
    galleryId: "",
    userId: "",
    body: "",
  });

  const dispatch = useDispatch();
  const gallery = useSelector(selectSingleGallery);
  const userData = useSelector(selectUser);

  useEffect(() => {
    handleGetGallery();
    if (userData.user && id) {
      setNewComment({
        ...newComment,
        galleryId: id,
        userId: userData.user.id,
      });
    }
  }, [id, userData]);

  // Data for rendering DELETE & EDIT buttons
  let loggedUserId = "";
  let galleryUserId = "";

  let galleryUsersMatch = false;

  if (userData && userData.user && gallery.user) {
    loggedUserId = userData.user.id;
    galleryUserId = gallery.user.id;

    if (loggedUserId === galleryUserId) {
      galleryUsersMatch = true;
    }
  }

  const handleGetGallery = async () => {
    await dispatch(initGetSingleGallery(id));
  };

  const handleDeleteGallery = async (id) => {
    await dispatch(initDeleteGallery(id));
    alert("Gallery deleted!");
    history.push("/");
  };

  const handleOnSubmitComment = async (e) => {
    e.preventDefault();

    await dispatch(initAddComment(newComment));
    history.push(`/galleries/${id}`);
    window.location.reload(); // Znam da je prelose ali trka s vremenom..
  };
  return (
    <div>
      {gallery && gallery.user && gallery.comments && gallery.images && (
        <>
          <ConditionalWrapper
            condition={galleryUsersMatch}
            wrapper={() => (
              <div className="gallery-buttons">
                <button className="btn btn-warning">
                  <Link to={`/edit-gallery/${id}`}>Edit</Link>
                </button>
                <DeleteButton
                  onClickDeleteButton={() => {
                    handleDeleteGallery(gallery.id);
                  }}
                />
              </div>
            )}
          ></ConditionalWrapper>
          <GalleryComponent
            key={gallery.id}
            title={gallery.title}
            description={gallery.description}
            author={gallery.user}
            createdAt={gallery.created_at}
            images={gallery.images}
          />
            <CommentComponent
              newComment={newComment}
              setNewComment={setNewComment}
              comments={gallery.comments}
              loggedUserId={loggedUserId}
              onHandleComments={handleOnSubmitComment}
            />
        </>
      )}
    </div>
  );
}
