import React from "react";
import useReplicant from "../../hooks";

const CommentFrame = () => {
  const comments = useReplicant("comments")[0] ?? [];

  return (
    <div id="comment-frame">
      <div className="text-center font-bold" style={{ fontSize: "2rem" }}>
        Comments
      </div>
      <div
        className="w-full grow flex flex-col comments-container"
        style={{ gap: "0.5rem" }}
      >
        {comments.map((comment, id) => (
          <div className="chat chat-start" key={id}>
            <div className="chat-header" style={{ fontSize: "0.7rem" }}>
              {comment.sender}
            </div>
            <div className="chat-bubble" style={{ fontSize: "1rem" }}>
              {comment.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentFrame;
