import { TasksType } from '../App'
import trash from '../assets/trash.png'

interface ItemTaskProps {
  task: TasksType
  completeTask: (taskId: string) => void
  removeTask: (taskId: string) => void
}

const ItemTask = ({ task, completeTask, removeTask }: ItemTaskProps) => {
  function handleCompleteTask() {
    completeTask(task.id)
  }
  function handleRemoveTask() {
    removeTask(task.id)
  }
  return (
    <div
      key={task.id}
      className="p-4 flex items-center justify-between gap-2 bg-gray-800 rounded-lg"
    >
      <input
        type="checkbox"
        onChange={handleCompleteTask}
        defaultChecked={task.isCompleted}
      />
      <p
        data-isCompleted={task.isCompleted}
        className="text-white text-sm break-all data-[isCompleted=true]:line-through data-[isCompleted=true]:text-gray-400"
      >
        {task.content}
      </p>
      <button onClick={handleRemoveTask}>
        <img src={trash} alt="lixeira" />
      </button>
    </div>
  )
}

export default ItemTask
