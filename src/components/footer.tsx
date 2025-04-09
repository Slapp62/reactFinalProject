import { Footer, FooterBrand, FooterCopyright, FooterLink, FooterLinkGroup } from "flowbite-react";

export function FooterComp() {
  return (
    <Footer container className="rounded-none p-3 leading-none">
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <FooterBrand
            href="https://flowbite.com"
            src="https://flowbite.com/docs/images/logo.svg"
            alt="Flowbite Logo"
            name="Simcha Lapp Projects"
          />
          <FooterCopyright href="#" by="Simcha Lapp" year={2025} />
          <FooterLinkGroup>
            <FooterLink href="#">About</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Licensing</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </FooterLinkGroup>
        </div>
      </div>
    </Footer>
  );
}
