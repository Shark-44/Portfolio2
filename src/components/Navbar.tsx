import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-opacity-40
     bg-gray-800" style={{ backdropFilter: "blur(10px)" }}>
      <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
        <li>
          <Link
            to="/"
            className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/One"
            className="block py-2 px-3 text-gray-200 hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-400"
          >
            Mes projets
          </Link>
        </li>
        <li>
          <Link
            to="/Contact"
            className="block py-2 px-3 text-gray-200 hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-400"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar