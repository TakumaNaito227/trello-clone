import React, { useState } from "react";
import { AddTaskCardsButton } from "./button/AddTaskCardsButton";
import { TaskCard } from "./TaskCard";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

export const TaskCards = () => {
  const [taskCardsList, setTaskCardsList] = useState([
    { id: "0", draggableId: "item0" },
  ]);
  return (
    <DragDropContext>
      <Droppable droppableId="droppable" direction="horizontal">
        {(provided) => (
          <div
            className="taskCardsArea"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {taskCardsList.map((taskCard, index) => (
              <TaskCard
                key={taskCard.id}
                taskCardsList={taskCardsList}
                setTaskCardsList={setTaskCardsList}
                taskCard={taskCard}
                index={index}
              />
            ))}
            <AddTaskCardsButton
              taskCardsList={taskCardsList}
              setTaskCardsList={setTaskCardsList}
            />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
