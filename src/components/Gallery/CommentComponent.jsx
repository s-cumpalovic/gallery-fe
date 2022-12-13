import React from "react";
import { Link } from "react-router-dom";

export default function CommentComponent({
  newComment,
  setNewComment,
  loggedUserId,
  comments,
  onHandleComments,
}) {
  return (
    <div>
      <h1>Comments</h1>
      <div className="gallery-comments">
        {comments
          ? comments.map((comment) => (
              <ul key={comment.id}>
                <li>
                  <h5>
                    {comment.user.first_name} {comment.user.last_name}
                  </h5>
                  <p>Created: {comment.created_at}</p>
                  <p>{comment.body}</p>
                </li>
              </ul>
            ))
          : "This gallery has no comments"}
      </div>
      {loggedUserId ? (
        <div className="comments-form">
          <form className="form-component" onSubmit={onHandleComments}>
            <label>Add new comment</label>
            <textarea
              palceholder="Description"
              value={newComment.body}
              onChange={({ target }) =>
                setNewComment({
                  ...newComment,
                  body: target.value,
                })
              }
            />
            <button className="btn btn-primary" type="submit">
              Publish
            </button>
          </form>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
