const InfoTask = () => {
  return (
    <div className="mt-20 max-w-2xl w-full flex items-center justify-between py-5">
      <p className="text-blue-400 font-bold flex items-center gap-2">
        Tarefas criadas
        <span className="bg-gray-500 text-white py-[2px] px-2 rounded-full text-xs">
          0
        </span>
      </p>
      <p className="text-purple-400  font-bold flex items-center gap-2">
        Concluídas
        <span className="bg-gray-500 text-white py-[2px] px-2 rounded-full text-xs">
          0
        </span>
      </p>
    </div>
  )
}

export default InfoTask
