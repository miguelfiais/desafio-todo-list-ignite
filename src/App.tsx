import Header from './components/Header'
import InfoTask from './components/InfoTask'
import WithoutTask from './components/WithoutTasks'

function App() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />
      <div className="flex-1 bg-gray-900 px-5 flex flex-col items-center">
        <InfoTask />
        <WithoutTask />
      </div>
    </div>
  )
}

export default App
