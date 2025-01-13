import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import GamesLibri_logo from '../assets/GamesLibri_logo.svg'

function Header() {

  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (searchTerm.trim() !== '') {
      navigate(`/search?q=${searchTerm}`); 
    }
  }, [navigate, searchTerm]);

  return (
    <header className="shadow-lg sticky z-50 top-0">
      <nav className="bg-[#2a293e] px-6 ">
        <div className="flex justify-between items-center mx-auto">
          <Link to="/" className="flex items-center">
            <img
              src={GamesLibri_logo}
              className="h-16"
              alt="Logo"
            />
          </Link>

          <div className="flex-1 flex justify-center">
            <ul className="flex space-x-8 font-medium">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 ${isActive ? 'text-yellow-500' : 'text-white'
                    } border-b border-gray-100 lg:hover:bg-transparent lg:border-0 hover:text-yellow-500 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/allgames"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 ${isActive ? 'text-yellow-500' : 'text-white'
                    } border-b border-gray-100 lg:hover:bg-transparent lg:border-0 hover:text-yellow-500 lg:p-0`
                  }
                >
                  All Games
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/category"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 ${isActive ? 'text-yellow-500' : 'text-white'
                    } border-b border-gray-100 lg:hover:bg-transparent lg:border-0 hover:text-yellow-500 lg:p-0`
                  }
                >
                  Category
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 ${isActive ? 'text-yellow-500' : 'text-white'
                    } border-b border-gray-100 lg:hover:bg-transparent lg:border-0 hover:text-yellow-500 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="flex items-center p-2 bg-[#19182b] rounded-full">
            <input              
                type="text"
                className="flex-1 border-none outline-none px-4 py-0.5 bg-transparent text-gray-500 font-bold italic placeholder-gray-500"
                placeholder="Search here..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
              <i className="fi fi-br-search text-slate-200 mx-2"></i>
          </div>

        </div>
      </nav>
    </header>
  );
}

export default Header;
