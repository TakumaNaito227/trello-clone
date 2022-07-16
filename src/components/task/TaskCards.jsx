import React from "react";
import AddTaskCardsButton from "./button/AddTaskCardsButton";
import TaskCard from "./TaskCard";

export default function TaskCards() {
  return (
    <div>
      <TaskCard />
      <AddTaskCardsButton />
    </div>
  );
}
