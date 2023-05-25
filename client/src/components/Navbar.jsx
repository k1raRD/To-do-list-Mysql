import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className="bg-teal-400 flex justify-between px-20 py-4">
      <Link to="/" className="text-white font-bold">
        <h1 >React Mysql</h1>
      </Link>

        <ul className="flex gap-x-1">
            <li>
                <Link to="/" className="bg-sky-900 px-2 py-1 text-white">Home</Link>
            </li>
            <li>
                <Link to="/new" className="bg-sky-900 px-2 py-1 text-white">Create Task</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar