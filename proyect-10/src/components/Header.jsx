import logo from "../assets/logo.svg"
import hamburger from "../assets/icon-hamburger.svg"
import iconClose from "../assets/icon-close.svg"
import { useState } from "react"

function Header() {

  const [isMenu, setMenu] = useState(false);

  const openMenu = () => {
    setMenu(true)
  }

  const closeMenu = () => {
    setMenu(false)
  }

  return (
    <header>
      <div className="w-full h-auto absolute top-0 z-50">
        <div className="container mx-auto flex items-center p-10 md:px-0 justify-between">
          <div>
            <img src={logo} draggable="false" width="150" alt="" />
          </div>
          <div className="block md:hidden">
            <button className="inline-block p-0" onClick={openMenu}>
              <img decoding="async" src={hamburger} alt="" className="size-6 object-contain" />
            </button>
          </div>
          <div className="hidden md:block">
            <ul className="flex flex-row gap-5 items-center">
              <li><a className="text-white hover:underline cursor-pointer font-Alata font-thin text-base" href="">About</a></li>
              <li><a className="text-white hover:underline cursor-pointer font-Alata font-thin text-base" href="">Careers</a></li>
              <li><a className="text-white hover:underline cursor-pointer font-Alata font-thin text-base" href="">Events</a></li>
              <li><a className="text-white hover:underline cursor-pointer font-Alata font-thin text-base" href="">Products</a></li>
              <li><a className="text-white hover:underline cursor-pointer font-Alata font-thin text-base" href="">Support</a></li>
            </ul>
          </div>
          {
            isMenu && <div className="w-full min-h-screen fixed inset-0 bg-black p-10">
              <div className="container mx-auto flex items-center justify-between">
                <div>
                  <img src={logo} draggable="false" width="150" alt="" />
                </div>
                <div onClick={closeMenu}>
                  <button className="inline-block p-0" onClick={closeMenu}>
                    <img src={iconClose} draggable="false" className="size-5" alt="" />
                  </button>
                </div>
              </div>
              <ul className="absolute top-1/2 left-[6rem] -translate-x-1/2 -translate-y-1/2 flex flex-col md:flex-row gap-5 items-start justify-start">
                <li><a className="text-white hover:underline cursor-pointer font-Josefin font-light text-2xl uppercase" href="">About</a></li>
                <li><a className="text-white hover:underline cursor-pointer font-Josefin font-light text-2xl uppercase" href="">Careers</a></li>
                <li><a className="text-white hover:underline cursor-pointer font-Josefin font-light text-2xl uppercase" href="">Events</a></li>
                <li><a className="text-white hover:underline cursor-pointer font-Josefin font-light text-2xl uppercase" href="">Products</a></li>
                <li><a className="text-white hover:underline cursor-pointer font-Josefin font-light text-2xl uppercase" href="">Support</a></li>
              </ul>
            </div>
          }
        </div>
      </div>
    </header>
  )
}

export default Header