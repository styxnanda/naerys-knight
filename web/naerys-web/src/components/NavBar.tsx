import { Link } from "@tanstack/react-router"

const NavBar = () => {
  return (
    <div className="p-4 flex bg-slate-700 text-fuchsia-100 justify-between">
        <Link to="/" className="[&.active]:font-bold px-3">
            A Game of Thrones
        </Link>
        <div className="flex gap-5">
            <Link to="/characters" className="[&.active]:font-bold">
                Characters
            </Link>{' '}
            <Link to="/peyrie" className="[&.active]:font-bold">
                Pairing
            </Link>
        </div>
  </div>
  )
}

export default NavBar