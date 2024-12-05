import { useState } from "react";
import "./App.css";
import NavItem from "./Components/NavItem";



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isMenuVisible, setIsMenuVisible] = useState(!true);
  const BtnStyle = "py-2 px-5  rounded-xl border-none bg-blue-600 text-white text-lg"
  const NavData = [
    { id: 0, name: "Home", href: "Home" },
    { id: 1, name: "Team", href: "Team" },
    { id: 2, name: "About", href: "About" },
    { id: 3, name: "Contact", href: "Contact" }
  ]
  return (
    <>
      <header className="flex flex-wrap items-center justify-between px-3  dark:bg-slate-900 dark:text-white">
        <nav className={`${isMenuVisible ? "" : "hidden"
          }  order-1 sm:-order-1 w-full sm:w-auto sm:block`}>
          <ul className="flex list-none gap-5 pl-0">
         
            {
              NavData.map(
                (item) =>
                  <NavItem key={item.id} name={item.name} href={item.href} />
              )
            }
          </ul>
        </nav>
        <h1>Logo</h1>
        <div className="flex gap-2">
          {

          }
          {
            isLoggedIn ?
              <>
                <button onClick={() => setIsLoggedIn(false)}
                  className={BtnStyle} >
                  Login
                </button>
                <button onClick={() => setIsLoggedIn(false)}
                  className={BtnStyle}>
                  Sign up
                </button>
              </>
              :
              <button onClick={() => setIsLoggedIn(true)}
                className={BtnStyle}>
                Log out
              </button>
          }
          <button onClick={() => setIsMenuVisible(!isMenuVisible)}
            className="sm:hidden order-1 py-2 px-5 rounded-xl border-none bg-gray-400 text-lg" >
            {isMenuVisible ? "▲" : "▼"}
          </button>
        </div>
      </header>

    </>
  );
}

export default App;
