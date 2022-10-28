import { SiGithub, SiLinkedin, SiLeetcode, SiCodewars, SiTwilio  } from "react-icons/si"
import { MdMenu, MdMenuOpen } from "react-icons/md"
import { IconContext } from "react-icons/lib"
import NavLink from "./NavLink"
import Link from "next/link"
import { useState } from 'react'


export default function Nav() {
  const [menuState, setMenuState] = useState(false)
  return(
    <nav className="h-fit bg-stone-900 w-full mx-auto shadow-nav shadow-orange-900/5">
      {/* Desktop Menu */}
      <div className="hidden md:block">
        <div className="flex justify-between py-4">
          {/* Links */}
          <div className="flex justify-between w-2/3">
            {/* <Link href="/" passHref>
              <NavLink name="Home"/>
            </Link>
            <Link href="/blogposts" passHref>
              <NavLink name="Blogposts"/>
            </Link>
            <Link href="/goals" passHref>
              <NavLink name="Goals"/>
            </Link>
            <Link href="/pomodoro" passHref>
              <NavLink name="Pomodoro"/>
            </Link>
            <Link href="/info" passHref>
              <NavLink name="Info"/>
            </Link> */}
          </div>
          <div className="self-center w-1/6 pr-4">
              <IconContext.Provider value={{ className: "text-rose-300 hover:text-orange-300 hover:scale-110 transition ease-in-out", size: "1.5em"}}>
                <div className="flex justify-between">
                  <a href="https://github.com/dainylcua/">
                    <SiGithub />
                  </a>
                  <a href="https://www.linkedin.com/in/dainylcua/">
                    <SiLinkedin />
                  </a>
                  <a href="https://leetcode.com/dainylcua/">
                    <SiLeetcode />
                  </a>
                  <a href="https://www.codewars.com/users/dainylcua">
                    <SiCodewars />
                  </a>
                  <a href="https://www.twilio.com/blog/author/dcua">
                    <SiTwilio />
                  </a>
                </div>
              </IconContext.Provider>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="block md:hidden">
        <div className="py-4">
          <IconContext.Provider value={{ className: "text-stone-300 hover:text-stone-200 hover:scale-110 transition ease-in-out", size:"1.5em"}}>
            <button onClick={() => setMenuState((prevState) => !prevState)}>
              {
                menuState ?
                  <MdMenuOpen />
                :
                  <MdMenu />
              }
            </button>
          </IconContext.Provider>
        </div>
      </div>
      <div className={`${menuState ? 'block' : 'hidden'} py-4 md:hidden`} id="menu">
        <ul className="flex flex-col">
          {/* <Link href="/" passHref>
            <NavLink name="Home"/>
          </Link>
          <Link href="/blogposts" passHref>
            <NavLink name="Blogposts"/>
          </Link>
          <Link href="/goals" passHref>
            <NavLink name="Goals"/>
          </Link>
          <Link href="/pomodoro" passHref>
            <NavLink name="Pomodoro"/>
          </Link>
          <Link href="/info" passHref>
            <NavLink name="Info"/>
          </Link> */}
        </ul>
      </div>

      {/* Border */}
      <div className="bg-gradient-to-r from-orange-700 to-rose-500 h-[1.5px] rounded-full w-full mx-auto" />
    </nav>
  )
}