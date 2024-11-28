import Image from "next/image";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/constants";

import DownloadCV from "./DownloadCV";
import NavBarItem from "./NavBarItem";
import { ThemeToggle } from "./ThemeToggle";

export default function MobileNavigation() {
  return (
    <Sheet>
      <SheetTrigger asChild className="cursor-pointer md:hidden">
        <Image
          src={"/icons/menu.svg"}
          alt="menu"
          height={36}
          width={36}
          className="invert-colors"
        />
      </SheetTrigger>
      <SheetContent
        side={"right"}
        className="flex max-w-[230px] flex-col border-none bg-gray outline-none drop-shadow-2xl "
      >
        <SheetTitle className="hidden">Navigation</SheetTitle>
        <div className="w-full border-b  border-gray-100 pb-4">
          <h3 className="font-inter text-[30px] font-bold text-gray-900">
            {"<SS />"}
          </h3>
        </div>

        <SheetClose asChild className="w-full">
          <section className="flex size-full flex-col gap-6 pt-16 ">
            <ul className="flex flex-col gap-4 border-b border-gray-100  pb-4 ">
              {navLinks.map(({ _id, title, moveTo }) => {
                return <NavBarItem key={_id} title={title} moveTo={moveTo} />;
              })}
            </ul>
            <div className="flex w-full  items-center justify-between gap-3">
              <h3 className="body-2 text-gray-600 ">Switch Theme</h3>
              <ThemeToggle />
            </div>
            <DownloadCV />
          </section>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
}
