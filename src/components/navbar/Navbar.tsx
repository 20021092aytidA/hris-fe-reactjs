import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

export default function Navbar() {
  return (
    <>
      <div className="hidden sm:block">
        <NavbarDesktop />
      </div>
      <div className="block sm:hidden">
        <NavbarMobile />
      </div>
    </>
  );
}
