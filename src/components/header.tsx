import { TiBusinessCard } from "react-icons/ti";

import { DarkThemeToggle, Navbar, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { AvatarComp } from "./avatar";
import { Link } from "react-router-dom";


export function Nav({ onLoginClick }: { onLoginClick: () => void }) {
  return (
    <Navbar fluid className=" bg-white shadow-md rounded-none opacity-90">

      <Link to='/' className="flex gap-2">
        <TiBusinessCard size={40}/>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Business Cards</span>
      </Link>

      <div className="flex md:order-2 gap-3">
        <AvatarComp/>
        <DarkThemeToggle className="border-black"/>
        <NavbarToggle />
      </div>

      <NavbarCollapse className="flex align-center justify-center">
        <Link as={Link} to='/' active>Home</Link>
        <Link as={Link} to='/about'>About</Link>
        <NavbarLink href="#">Register</NavbarLink>
        <NavbarLink onClick={onLoginClick} className="cursor-pointer">Login</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
        <Link as={Link} to="/adminControl">Admin Controls</Link>
      </NavbarCollapse>
    </Navbar>
  );
}

