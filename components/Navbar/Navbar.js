import Link from "next/link";
import React, { useContext } from "react";
import { UserContext } from "../UserContext/UserContext";

const Navbar = () => {
  const [login, setLogin] = useContext(UserContext);
  return (
    <div>
      <header className="py-8 bg-slate-300">
        <nav className="px-6">
          <ul className="flex justify-between items-center">
            <div>
              <li className="ml-4">
                <Link href="/">
                  <a className="text-3xl">Showcase</a>
                </Link>
              </li>
            </div>

            <div>
              <ul className="flex items-center justify-between px-10">
                <li className="ml-5">
                  <Link href={login ? "/add-data" : "/login"} passHref>
                    <a>
                      <button className="bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded">
                        Add Project
                      </button>
                    </a>
                  </Link>
                </li>
                <li className="ml-5">
                  {login && (
                    <Link href="/" passHref>
                      <a>
                        <button
                          onClick={() => setLogin(false)}
                          className="bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded"
                        >
                          Logout
                        </button>
                      </a>
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
