import React, { useState } from "react";
import TaskAddInput from "./input/TaskAddInput";
import TaskCardDeleteButton from "./TaskCardDeleteButton";
import TaskCardTitle from "./TaskCardTitle";
import Tasks from "./Tasks";

export default function TaskCard() {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);
  return (
    <div className="taskCard">
      <TaskCardTitle />
      <TaskCardDeleteButton />
      <TaskAddInput
        inputText={inputText}
        setInputText={setInputText}
        setTextList={setTaskList}
        taskList={taskList}
      />
      <Tasks inputText={inputText} taskList={taskList} />
    </div>
  );
}
