import React, { useState } from "react";
import { AddTaskCardsButton } from "./button/AddTaskCardsButton";
import { TaskCard } from "./TaskCard";

export const TaskCards = () => {
  const [taskCardsList, setTaskCardsList] = useState([]);
  return (
    <div className="taskCardsArea">
      {taskCardsList.map(taskCardList => (
        <TaskCard key={taskCardList.id}/>
      ))}
      <AddTaskCardsButton
        taskCardsList={taskCardsList}
        setTaskCardsList={setTaskCardsList}
      />
    </div>
  );
};
