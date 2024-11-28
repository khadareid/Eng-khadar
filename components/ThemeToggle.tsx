"use client";

import Image from "next/image";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { setTheme, resolvedTheme: currentTheme } = useTheme();
  const [render, setRender] = useState(false);
  useEffect(function () {
    setRender(true);
  }, []);
  if (!render) return null;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="bg-transparent">
        <Button
          size="icon"
          className={cn("cursor-pointer outline-none hover:bg-gray-200")}
        >
          {currentTheme === "light" && (
            <Image
              src={"/icons/sun.svg"}
              width={30}
              height={30}
              alt="light mode logo"
              priority
              loading="eager"
              className="invert-colors"
            />
          )}
          {currentTheme === "dark" && (
            <Image
              src={"/icons/moon.svg"}
              width={30}
              height={30}
              alt="dark mode logo"
              priority
              loading="eager"
              className="invert-colors"
            />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="rounded-md border-none bg-gray-50 px-3  py-4 outline-none"
      >
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="body-2 text-gray-600 focus:bg-gray focus:text-gray-600"
        >
          <Image
            src={"/icons/sun.svg"}
            width={20}
            height={20}
            alt="light mode logo"
            priority
            loading="eager"
            className="invert-colors"
          />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="body-2 text-gray-600 focus:bg-gray focus:text-gray-600"
        >
          <Image
            src={"icons/moon.svg"}
            width={20}
            height={20}
            alt="light mode logo"
            priority
            loading="eager"
            className="invert-colors"
          />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="body-2 text-gray-600 focus:bg-gray focus:text-gray-600"
        >
          <Image
            src={"/icons/computer.svg"}
            width={20}
            height={20}
            alt="light mode logo"
            priority
            loading="eager"
            className="invert-colors"
          />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
