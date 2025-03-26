import { TiBusinessCard } from "react-icons/ti";

import { DarkThemeToggle, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";


export function Nav() {
  return (
    <Navbar fluid className=" bg-white shadow-md rounded-none opacity-90">

      <NavbarBrand href="https://flowbite-react.com">
        <TiBusinessCard size={40} className="mr-3 dark:text-white" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Business Cards</span>
      </NavbarBrand>

      <div className="flex md:order-2">
        <DarkThemeToggle />
        <NavbarToggle />
      </div>

      <NavbarCollapse>
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink href="#">About</NavbarLink>
        <NavbarLink href="#">Services</NavbarLink>
        <NavbarLink href="#">Pricing</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}

