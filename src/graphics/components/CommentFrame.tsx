import React from "react";

interface Comment {
  name: string;
  text: string;
}

const CommentFrame = () => {
  const comments: Comment[] = [
    { name: "総研太郎", text: "こんにちは！" },
    { name: "SOKEN Taro", text: "質問なのですが，" },
  ];
  comments.map((comment) => (
    <li>
      {comment.name} {comment.text}
    </li>
  ));
  return (
    <div id="comment-frame">
      {comments.map((comment) => (
        <li>
          {comment.name} {comment.text}
        </li>
      ))}
    </div>
  );
};

export default CommentFrame;
