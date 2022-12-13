import React from "react";

export default function CreateGalleryComponent({
  newGallery,
  setNewGallery,
  image,
  setImage,
  onSubmitGallery,
}) {
  const handleImages = () => {
    setNewGallery({
      ...newGallery,
      images: [...newGallery.images, image],
    });
  };

  return (
    <>
      <form className="form-component" onSubmit={onSubmitGallery}>
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
          Create gallery
        </button>
        <button className="btn btn-warning" onClick={handleImages}>
          Add image
        </button>
      </form>
    </>
  );
}
