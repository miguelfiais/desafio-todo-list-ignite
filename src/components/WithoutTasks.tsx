import withoutTasks from '../assets/withoutTasks.png'

const WithoutTasks = () => {
  return (
    <div className="border-t border-gray-700 rounded-lg max-w-2xl w-full">
      <div className="flex flex-col items-center justify-center gap-3 pt-6">
        <img src={withoutTasks} alt="lista" />
        <p className="text-gray-500 text-center">
          <span className="font-bold">
            Você ainda não tem tarefas cadastradas
          </span>
          <br />
          Crie tarefas e organize seus itens a fazer
        </p>
      </div>
    </div>
  )
}

export default WithoutTasks
