import React from "react";

export default function CreateGalleryComponent({
  newGallery,
  setNewGallery,
  image,
  setNewImage,
  onSubmitGallery,
}) {
  return (
    <form onSubmit={onSubmitGallery}>
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
        value={newGallery.images}
        type="text"
        onChange={({ target }) =>
          setNewGallery({
          })
        }
      />
      <button type="submit">Login</button>
    </form>
  );
}
