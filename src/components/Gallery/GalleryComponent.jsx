import React from "react";
import { Link } from "react-router-dom";
import { ConditionalWrapper } from "../Wrappers/ConditionalWrapper";

export default function GalleryComponent({ id, title, description, image }) {
  return (
    <div>
      <ConditionalWrapper
        condition={id}
        wrapper={(children) => <Link to={`/galleries/${id}`}>{children}</Link>}
      >
        <h3>{title}</h3>
      </ConditionalWrapper>
      <img src={image} />
      <p>{description}</p>
    </div>
  );
}
