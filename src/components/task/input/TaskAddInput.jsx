import React from "react";

const TaskAddInput = ({ inputText, setInputText, setTaskList, taskList }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(typeof(setTaskList))
    // カードを追加する
    setTaskList([...taskList, { text: inputText }]);
    setInputText("");
    console.log(...taskList);
    console.log(inputText);
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add a task"
          className="taskAddInput"
          onChange={handleChange}
          value={inputText}
        />
      </form>
    </div>
  );
};

export default TaskAddInput;
