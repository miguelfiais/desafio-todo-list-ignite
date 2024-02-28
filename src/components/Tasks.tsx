import { TasksType } from '../App'
import ItemTask from './ItemTask'

interface TasksProps {
  tasks: TasksType[]
  completeTask: (taskId: string) => void
  removeTask: (taskId: string) => void
}

const Tasks = ({ tasks, completeTask, removeTask }: TasksProps) => {
  return (
    <div className="flex flex-col gap-2 w-full max-w-2xl">
      {tasks.map((task) => (
        <ItemTask
          key={task.id}
          task={task}
          completeTask={completeTask}
          removeTask={removeTask}
        />
      ))}
    </div>
  )
}

export default Tasks
