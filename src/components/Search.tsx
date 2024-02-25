import addIcon from '../assets/add-icon.png'

const Search = () => {
  return (
    <div className="flex gap-2 max-w-2xl w-full relative top-12">
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        className="w-full rounded-lg bg-gray-800 pl-2"
      />
      <button className="bg-blue-500 p-4 flex items-center gap-2 text-white font-bold text-sm rounded-lg">
        Criar <img src={addIcon} alt="adicionar" />
      </button>
    </div>
  )
}

export default Search
