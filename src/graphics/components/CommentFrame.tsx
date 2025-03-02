import React, { useState } from "react";
import { ZoomComment } from "../../nodeCGTypes";

const CommentFrame = () => {
  const init: ZoomComment[] = [
    { sender: "主催者", content: "皆さんご参加ありがとうございます！" },
  ];
  const [comments, setComments] = useState(init);

  nodecg.listenFor("receiveMessage", (data: ZoomComment) => {
    setComments([...comments, { sender: data.sender, content: data.content }]);
  });

  return (
    <div id="comment-frame">
      <div className="text-center font-bold" style={{ fontSize: "2rem" }}>
        Comments
      </div>
      <div
        className="w-full grow flex flex-col comments-container"
        style={{ gap: "0.5rem" }}
      >
        {comments.reverse().map((comment) => (
          <div className="chat chat-start">
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
