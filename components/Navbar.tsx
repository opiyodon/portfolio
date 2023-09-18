"use client";

import React from 'react';
import NavItem from "./NavItem"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { FaSun } from 'react-icons/fa'
import { BsFillMoonStarsFill } from 'react-icons/bs'


interface NavbarProps {
  toggleDarkMode: () => void; // Function to toggle dark mode
}

const Navbar: React.FC<NavbarProps> = ({ toggleDarkMode }) => {
  const [activeItem, setActiveItem] = useState<string>('');
  const [isSunIconVisible, setIsSunIconVisible] = useState<boolean>(true); // State to toggle the icon

  const toggleIcon = () => {
    setIsSunIconVisible(!isSunIconVisible);
    toggleDarkMode(); // Call the toggleDarkMode function on button click
  };
  {/*const router = useRouter();

  useEffect(() => {
    if (router.pathname === "/") setActiveItem('About');
    if (router.pathname === "/projects") setActiveItem('Projects');
    if (router.pathname === "/resume") setActiveItem('Resume');
  }, [router.pathname]);*/}

  return (
    <div className="bg-light_black rounded-t-2xl flex justify-between px-5 py-3 items-center">
      <span className="font-bold text-primary text-xl md:text-2xl border-b-4 border-b-primary">{activeItem}</span>
      <button
        className="bg-gradient-to-b from-primary to-secondary rounded-full p-2 text-black font-semibold"
        onClick={toggleIcon} // Call the toggleIcon function on button click
        name="light_dark_toggler"
      >
        {isSunIconVisible ? <FaSun className="w-6 h-6" /> : <BsFillMoonStarsFill className="w-6 h-6" />}
      </button>
      <div className="text-secondary text-lg flex space-x-5 items-center">

        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="About"
          route="/"
        />

        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Projects"
          route="/projects"
        />

        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Resume"
          route="/resume"
        />

      </div>
    </div>
  )
}

export default Navbar