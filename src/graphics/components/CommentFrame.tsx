import React from "react";

interface Comment {
  name: string;
  text: string;
}

const CommentFrame = () => {
  let comments: Comment[] = [
    { name: "総研太郎", text: "こんにちは！" },
    {
      name: "SOKEN Taro",
      text: "質問なのですが，そのアプローチではデータに加わる外れ値に何らかの仮定を置いていますか？",
    },
  ];
  comments = [
    ...comments,
    ...comments,
    ...comments,
    ...comments,
    ...comments,
    ...comments,
  ];
  comments.map((comment) => (
    <li>
      {comment.name} {comment.text}
    </li>
  ));
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
              {comment.name}
            </div>
            <div className="chat-bubble" style={{ fontSize: "1rem" }}>
              {comment.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentFrame;
