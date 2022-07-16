import React from "react";
import { useState } from "react";

const TaskCardTitle = () => {
  const [isClick, setIsClick] = useState(false);
  const [inputCardTitle, setinputCardTitle] = useState("today");

  const handleClick = () => {
    setIsClick(true);
  };

  const handleChange = (e) => {
    console.log(inputCardTitle);
    setinputCardTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    // enterを押してもページが更新されない様に制御
    e.preventDefault();
    setIsClick(false);
  };

  return (
    <div onClick={handleClick}>
      {isClick ? (
        // onSubmit -> enterを押したら起こるイベント処理
        <form onSubmit={handleSubmit}>
          {/* // onChange ->  フォーム内のエレメント（要素）の内容が変更された時に起こるイベント処理*/}
          <input type="text" onChange={handleChange} />
        </form>
      ) : (
        <h3>{inputCardTitle}</h3>
      )}
    </div>
  );
};

export default TaskCardTitle;
