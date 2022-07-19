import React from "react";
import { useState } from "react";

const TaskCardTitle = () => {
  const [isClick, setIsClick] = useState(false);
  const [inputCardTitle, setinputCardTitle] = useState("today");

  const handleClick = () => {
    setIsClick(true);
  };

  const handleChange = (e) => {
    setinputCardTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    // enterを押してもページが更新されない様に制御
    e.preventDefault();
    setIsClick(false);
  };

  const handleBlur = () => {
    setIsClick(false);
  };

  return (
    <div onClick={handleClick}>
      {isClick ? (
        // onSubmit -> enterを押したら起こるイベント処理
        <form onSubmit={handleSubmit} className="taskCardTitleInputArea">
          {/* // onChange ->  フォーム内のエレメント（要素）の内容が変更された時に起こるイベント処理*/}
          <input className="taskCardTitleInput"
            // インプットタグを押したら自動で入力できる状態になる
            autoFocus
            type="text"
            onChange={handleChange}
            // インプットタグから外れてクリックした時に起こるイベント処理
            onBlur={handleBlur}
            // インプットタグをクリックすると文字列が消えない様にする
            value={inputCardTitle}
            // 文字数制限
            maxLength="10"
          />
        </form>
      ) : (
        <h3>{inputCardTitle}</h3>
      )}
    </div>
  );
};

export default TaskCardTitle;
