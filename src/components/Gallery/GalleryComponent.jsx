import React from "react";
import { Link } from "react-router-dom";
import { ConditionalWrapper } from "../Wrappers/ConditionalWrapper";
import CarouselComponent from "./Carousel";

export default function GalleryComponent({
  id,
  title,
  description,
  mainImage,
  authorName,
  authorSurname,
  createdAt,
  images,
  comments,
  displayComments,
}) {
  return (
    <>
      {/* Gallery properties */}

      <div>
        <ConditionalWrapper
          condition={id}
          wrapper={(children) => (
            <Link to={`/galleries/${id}`}>{children}</Link>
          )}
        >
          <h3>{title}</h3>
        </ConditionalWrapper>
        <p>
          Author: {authorName} {authorSurname}{" "}
        </p>
        <p>Created at: {createdAt}</p>
        <p>Description: {description}</p>
        <img src={mainImage} />
      </div>

      {/* Images carousel */}

      {images ? <CarouselComponent images={images}></CarouselComponent> : ""}

      {/* Comments display */}

      <ConditionalWrapper
        condition={displayComments}
        wrapper={() => (
          <div>
            <h1>Comments</h1>
            <div>
              {comments
                ? comments.map((comment) => (
                    <ul key={comment.id}>
                      <li>{comment.body}</li>
                    </ul>
                  ))
                : "This gallery has no comments"}
            </div>
          </div>
        )}
      ></ConditionalWrapper>
    </>
  );
}
