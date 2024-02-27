import { useState } from 'react'
import Header from './components/Header'
import InfoTask from './components/InfoTask'
import WithoutTask from './components/WithoutTasks'
import { v4 } from 'uuid'
import Tasks from './components/Tasks'

export interface TasksType {
  id: string
  content: string
  isCompleted: boolean
}

function App() {
  const [tasks, setTasks] = useState<TasksType[]>([])

  function addNewTask(content: string) {
    setTasks([...tasks, { id: v4(), content, isCompleted: false }])
  }

  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header onAddNewTask={addNewTask} />
      <div className="flex-1 bg-gray-900 px-5 flex flex-col items-center">
        <InfoTask />
        {tasks.length ? <Tasks tasks={tasks} /> : <WithoutTask />}
      </div>
    </div>
  )
}

export default App
