import { NavLink } from "react-router-dom";

const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  return (

    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
  <div className="px-10 flex items-center">

    <h1 className="text-3xl font-bold">
      <NavLink to="/" className="hover:text-blue-400 text-3xl">
        Home
      </NavLink>
    </h1>

    <ul className="flex list-none space-x-10 ml-auto pr-10">
      <li>
        <NavLink
          to="../canidate"
          className={({ isActive }) =>
            isActive
              ? "text-blue-400 border-b-2 border-blue-400 pb-1"
              : "hover:text-blue-400 pb-1"
          }
        >
          Search Canidates
        </NavLink>
      </li>
        <li>
        <NavLink
          to="/savedcanidates"
          className={({ isActive }) =>
            isActive
              ? "text-blue-400 border-b-2 border-blue-400 pb-1"
              : "hover:text-blue-400 pb-1"
          }
        >
          Potential Canidates
        </NavLink>
      </li>
    </ul>
  </div>
</nav>
  )
};

export default Nav;
