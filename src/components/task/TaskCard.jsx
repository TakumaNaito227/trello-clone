import React from 'react'
import TaskAddInput from './input/TaskAddInput'
import TaskCardDeleteButton from './TaskCardDeleteButton'
import TaskCardTitle from './TaskCardTitle'
import Tasks from './Tasks'

export default function TaskCard() {
  return (
    <div className='taskCard'>
      <TaskCardTitle />
      <TaskCardDeleteButton />
      <TaskAddInput />
      <Tasks />
    </div>
  )
}
