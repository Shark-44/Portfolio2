function Navbar() {
  return (
    <div
      className="fixed top-0 left-0 w-full z-50 bg-opacity-70 bg-gray-800"
      style={{ backdropFilter: "blur(10px)" }} // Optionnel : ajoute un effet de flou pour une meilleure lisibilité
    >
      <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
        <li>
          <a
            href="/"
            className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
            aria-current="page"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/One"
            className="block py-2 px-3 text-gray-200 hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-400"
          >
            Mes projets
          </a>
        </li>
        <li>
          <a
            href="/Contact"
            className="block py-2 px-3 text-gray-200 hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-400"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
