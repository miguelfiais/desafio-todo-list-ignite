import { TasksType } from '../App'
import trash from '../assets/trash.png'

interface TasksProps {
  tasks: TasksType[]
}
const Tasks = ({ tasks }: TasksProps) => {
  return (
    <div className="flex flex-col gap-2 w-full max-w-2xl">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="p-4 flex items-center justify-between gap-2 bg-gray-800 rounded-lg"
        >
          <input type="checkbox" />
          <p className="text-white text-sm break-all">{task.content}</p>
          <button>
            <img src={trash} alt="lixeira" />
          </button>
        </div>
      ))}
    </div>
  )
}

export default Tasks
