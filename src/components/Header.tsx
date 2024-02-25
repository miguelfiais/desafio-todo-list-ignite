import logo from '../assets/logo.png'
import Search from './Search'
interface HeaderProps {
  onAddNewTask: (content: string) => void
}
const Header = ({ onAddNewTask }: HeaderProps) => {
  return (
    <header className="flex flex-col items-center justify-center bg-gray-950 py-4 px-5">
      <img src={logo} alt="logo todo list" />
      <Search onAddNewTask={onAddNewTask} />
    </header>
  )
}

export default Header
