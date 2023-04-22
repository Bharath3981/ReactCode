import {useContext} from 'react';
import { Bars3Icon, UserCircleIcon } from '@heroicons/react/24/solid';
import logo from "./assets/img/konark_logo.png";
import { NavLink  } from "react-router-dom";
import SideBarContext from '../context/SideBarContext';
 
const Header = () => {
  const [showSideBar, setShowSideBar] = useContext(SideBarContext);
  let mainMenus = [{
    menuId: 1,
    title: "Request Product",
    routePath: "/"
  }]
  
  return (
    <>
      <nav className="sticky w-full bg-white py-2 px-2 text-white shadow-md">
        <div className="flex items-center text-gray-900 justify-between">
          <a href="#" className="mr-4 block cursor-pointer py-1.5 font-sans text-base font-medium leading-relaxed text-inherit antialiased">
            <img src={logo} className='h-10' alt="Konark grocers" />
          </a>
          <ul className="hidden md:flex  ml-auto mr-8 items-center">
      {mainMenus.map( menu => (
        <li className="block" key={menu.menuId}>
          <NavLink to={menu.routePath} className={({isActive}) => "items-center p-2 m-1 rounded-lg" + (isActive ? " bg-[#96b203] font-semibold text-white" : " hover:text-white hover:bg-[#df582e]")} >
            {menu.title}
          </NavLink >
        </li>
      ) )}
    </ul>
    <div className='flex gap-3'>
      <button onClick={() => setShowSideBar(!showSideBar)}
        className="cursor inline-block"
        type="button">
        <Bars3Icon className="h-6 w-6 " />
      </button>
      <button
        className="cursor block"
        type="button">
        <UserCircleIcon className="h-6 w-6 " />
      </button>
    </div>

    





    
  </div>
  
</nav>
    </>
  )
}

export default Header
