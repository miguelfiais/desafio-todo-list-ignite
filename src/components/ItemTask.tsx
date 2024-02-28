import { TasksType } from '../App'
import trash from '../assets/trash.png'

interface ItemTaskProps {
  task: TasksType
  completeTask: (taskId: string) => void
}

const ItemTask = ({ task, completeTask }: ItemTaskProps) => {
  function handleCompleteTask() {
    completeTask(task.id)
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
      <p className="text-white text-sm break-all">{task.content}</p>
      <button onClick={handleCompleteTask}>
        <img src={trash} alt="lixeira" />
      </button>
    </div>
  )
}

export default ItemTask