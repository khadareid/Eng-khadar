import { navLinks } from "@/constants";
import DownloadCV from "./DownloadCV";
import MobileNavigation from "./MobileNavigation";
import NavBarItem from "./NavBarItem";
import { ThemeToggle } from "./ThemeToggle";

export default function AppNavbar() {
  return (
    <nav className="flex min-h-[68px] min-w-full items-center justify-between border-b-[.6px] border-gray-300 px-[80px] pb-2 bg-gradient-to-r bg-[#2D2D2D] text-white">
      {/* Brand name or logo */}
      <h3 className="font-inter text-[30px] font-bold text-white">
        Khadar Eid
      </h3>

      {/* Desktop navigation */}
      <ul className="hidden md:flex items-center gap-6 text-white">
        {navLinks.map(({ _id, title, moveTo }) => (
          <NavBarItem key={_id} title={title} moveTo={moveTo} />
        ))}

        {/* Theme toggle and CV download button */}
        <ThemeToggle />
        <DownloadCV />
      </ul>

      {/* Mobile navigation */}
      <MobileNavigation />
    </nav>
  );
}
