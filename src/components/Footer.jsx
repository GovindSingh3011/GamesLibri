import { Link, NavLink } from 'react-router-dom'
import GamesLibri_logo from '../assets/GamesLibri_logo.svg'

function Footer() {
  return (
    <footer  >
      <hr className="my-2 border-slate-700 sm:mx-auto" />

      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img
                src={GamesLibri_logo}
                className="mr-3 h-32"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">Resources</h2>
              <ul className=" font-medium">
                <li className=" mb-4">
                  <NavLink to="/" className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 ${isActive ? 'text-yellow-500' : 'text-gray-500'
                    } border-b hover:underline lg:hover:bg-transparent lg:border-0  lg:p-0`}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="mb-4">
                  <NavLink to="/about" className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 ${isActive ? 'text-yellow-500' : 'text-gray-500'
                    } border-b hover:underline lg:hover:bg-transparent lg:border-0  lg:p-0`}
                  >
                    About us
                  </NavLink>
                </li>

              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">Explore</h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <NavLink to="/category" className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 ${isActive ? 'text-yellow-500' : 'text-gray-500'
                    } border-b hover:underline lg:hover:bg-transparent lg:border-0  lg:p-0`}
                  >
                    Category
                  </NavLink>
                </li>
                <li className="mb-4">
                  <NavLink to="/allgames" className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 ${isActive ? 'text-yellow-500' : 'text-gray-500'
                    } border-b hover:underline lg:hover:bg-transparent lg:border-0  lg:p-0`}
                  >
                    All Games
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">Legal</h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link to="#" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-4 border-slate-600 sm:mx-auto lg:my-4" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-white sm:text-center">
            Copyright © 2025 <a href="https://govindsingh.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:underline font-bold">Govind Singh</a> All Rights Reserved.
          </span>

        </div>
      </div>
    </footer>
  )
}

export default Footer
