import React from "react";
import { Link } from "react-router-dom";
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
  comments,
  displayComments,
}) {
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
            {author.first_name}-{author.last_name}
          </Link>
        </p>
        <p className="gallery-date">Created at: {createdAt}</p>
        <p className="gallery-description">Description: {description}</p>
        {mainImage ? <img className="gallery-image" src={mainImage} /> : ""}
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
                      <li>
                        <h5>Author: {comment.user.first_name}</h5>
                        <p>Created: {comment.created_at}</p>
                        <p>{comment.body}</p>
                      </li>
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
