import { ChangeEvent, FormEvent, useState } from 'react'
import addIcon from '../assets/add-icon.png'

interface SearchProps {
  onAddNewTask: (content: string) => void
}

const Search = ({ onAddNewTask }: SearchProps) => {
  const [contentTask, setContentTask] = useState('')

  function handleAddNewTask(event: FormEvent) {
    event.preventDefault()
    onAddNewTask(contentTask)
    setContentTask('')
  }
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setContentTask(event.target.value)
  }
  return (
    <form
      onSubmit={handleAddNewTask}
      className="flex gap-2 max-w-2xl w-full relative top-12"
    >
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        className="w-full rounded-lg bg-gray-800 pl-2 text-gray-300"
        value={contentTask}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="bg-blue-500 p-4 flex items-center gap-2 text-white font-bold text-sm rounded-lg"
      >
        Criar <img src={addIcon} alt="adicionar" />
      </button>
    </form>
  )
}

export default Search
