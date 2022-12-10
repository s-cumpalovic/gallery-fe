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
          type="url"
          value={image.url}
          onChange={({ target }) => setImage({ url: target.value })}
        />
        <button type="submit">Create gallery</button>
      </form>
      <button onClick={handleImages}>Add image</button>
    </>
  );
}
