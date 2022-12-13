import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { initDeleteComment } from "../../store/gallery/slice";
import { selectUser } from "../../store/user/selectors";
import DeleteButton from "../Buttons/DeleteButton";
import { format } from "date-fns";
export default function CommentComponent({
  newComment,
  setNewComment,
  loggedUserId,
  comments,
  onHandleComments,
}) {
  const dispatch = useDispatch();
  const userData = useSelector(selectUser);

  let commentUserId = "";
  let commentUsersMatch = false;
  const handleOnDeleteButton = async (commentId) => {
    await dispatch(initDeleteComment(commentId));
    alert("Comment deleted");
    window.location.reload();
  };

  return (
    <div>
      <h1>Comments</h1>
      <div className="gallery-comments">
        {comments
          ? comments.map((comment) => (
              <>
                {userData.user && userData.user.id === comment.user_id ? (
                  <DeleteButton
                    onClickDeleteButton={() => handleOnDeleteButton(comment.id)}
                  />
                ) : (
                  ""
                )}
                <ul key={comment.id}>
                  <li>
                    <h5>
                      {comment.user.first_name} {comment.user.last_name}
                    </h5>
                    <p>Created: {format(new Date(comment.created_at), "dd-MM-yyyy HH:mm")}</p>
                    <p>{comment.body}</p>
                  </li>
                </ul>
              </>
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
