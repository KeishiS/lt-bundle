import React from "react";

const CommentsOp = () => {
  const onClick = () => {
    nodecg.sendMessage("clearComments");
  };

  return (
    <div>
      <button onClick={onClick}>Clear comments</button>
    </div>
  );
};

export default CommentsOp;
