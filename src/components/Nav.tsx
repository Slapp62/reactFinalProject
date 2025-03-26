import { TiBusinessCard } from "react-icons/ti";

import { DarkThemeToggle, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { AvatarComp } from "./avatar";


export function Nav() {
  return (
    <Navbar fluid className=" bg-white shadow-md rounded-none opacity-90">

      <NavbarBrand href="https://flowbite-react.com" className="flex gap-2">
        <TiBusinessCard size={40}/>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Business Cards</span>
      </NavbarBrand>

      <div className="flex md:order-2 gap-3">
        <AvatarComp/>
        <DarkThemeToggle className="border-black"/>
        <NavbarToggle />
      </div>

      <NavbarCollapse>
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink href="#">About</NavbarLink>
        <NavbarLink href="#">Register</NavbarLink>
        <NavbarLink href="#">Log In</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}

