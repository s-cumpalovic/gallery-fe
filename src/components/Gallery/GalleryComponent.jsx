import React from "react";
import { Link } from "react-router-dom";
import useFormattedDate from "../../hooks/useFormattedDate";
import { ConditionalWrapper } from "../Wrappers/ConditionalWrapper";
import CarouselComponent from "./Carousel";

export default function GalleryComponent({
  id,
  title,
  description,
  mainImage,
  author,
  createdAt,
  images,
}) {
  const formattedDate = useFormattedDate(createdAt, "dd-MM-yyyy HH:mm");
  return (
    <>
      {/* Gallery properties */}

      <div className="gallery-component">
        <ConditionalWrapper
          condition={id}
          wrapper={(children) => (
            <Link to={`/galleries/${id}`}>{children}</Link>
          )}
        >
          <h2 className="gallery-title">{title}</h2>
        </ConditionalWrapper>
        <p className="gallery-author">
          Author:
          <Link to={`/authors/${author.id}`}>
            {author.first_name}
            {author.last_name}
          </Link>
        </p>
        <p className="gallery-date">Created at: {formattedDate}</p>
        <p className="gallery-description">Description: {description}</p>
        {mainImage ? <img className="gallery-image" src={mainImage} /> : ""}
      </div>

      {/* Images carousel */}

      {images ? <CarouselComponent images={images}></CarouselComponent> : ""}
    </>
  );
}
