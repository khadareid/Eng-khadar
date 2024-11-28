"use client";

import Image from "next/image";

import { testimonialsMessages } from "@/constants";

import { InfiniteMovingCards } from "./ui/InfiniteMovingCard";

export function MovingCard() {
  return (
    <div className="relative flex h-[40rem] flex-col items-center justify-center overflow-hidden rounded-md bg-transparent antialiased">
      <InfiniteMovingCards direction="right" speed="slow">
        {testimonialsMessages.map((item) => (
          <li
            className="relative h-[428px] w-[373.33px] max-w-full shrink-0 rounded-[12px]  bg-gray-100 p-[48px] dark:drop-shadow-2xl"
            key={item.name}
          >
            <blockquote className="flex w-full flex-col items-start justify-center  ">
              <div className="flex size-[64px] items-center justify-center self-center rounded-full bg-[#9CA3AF]">
                <Image
                  src={item.icon}
                  width={50}
                  height={50}
                  alt="user icon"
                  priority
                  loading="eager"
                  className="invert-colors"
                />
              </div>
              <div
                aria-hidden="true"
                className=" pointer-events-none absolute -left-0.5 -top-0.5 -z-10 size-[calc(100%_+_4px)]"
              ></div>
              <span className="body-2 relative z-20  mt-5 text-gray-600">
                {`"${item.quote} "`}
              </span>
              <div className="relative z-20 mt-10 flex w-full flex-row items-center justify-center">
                <span className="flex flex-col items-center justify-center gap-1">
                  <span className="subtitle text-gray-600">{item.name}</span>
                  <span className="body-3 text-gray-600">{item.role}</span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </InfiniteMovingCards>
    </div>
  );
}
