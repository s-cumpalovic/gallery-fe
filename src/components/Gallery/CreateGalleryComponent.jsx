import React from "react";
import { useParams } from "react-router-dom";

export default function CreateGalleryComponent({
  newGallery,
  setNewGallery,
  image,
  setImage,
  onSubmitGallery,
  onEditGallery,
}) {
  const { id } = useParams();

  const handleImages = () => {
    setNewGallery({
      ...newGallery,
      images: [...newGallery.images, image],
    });
    setImage("");
  };

  return (
    <>
      <form className="form-component" onSubmit={!id ? onSubmitGallery : onEditGallery}>
        <input
          placeholder="Title.."
          type="text"
          value={newGallery.title}
          onChange={({ target }) =>
            setNewGallery({
              ...newGallery,
              title: target.value,
            })
          }
        />
        <textarea
          palceholder="Description"
          value={newGallery.description}
          onChange={({ target }) =>
            setNewGallery({
              ...newGallery,
              description: target.value,
            })
          }
        />
        <input
          placeholder="Add pictures.."
          type="url"
          value={image}
          onChange={({ target }) => setImage(target.value)}
        />
        <button className="btn btn-primary" type="submit">
          {!id ? 'Create gallery' : 'Edit gallery'}
        </button>
      </form>
      <button className="btn btn-warning" onClick={handleImages}>
        Add image
      </button>
    </>
  );
}
