import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

export default function SocailMedia({
  otherClasses,
}: {
  otherClasses?: string;
}) {
  return (
    <div className={cn("mt-8 flex gap-6 justify-center", otherClasses)}>
      <Link
        href="/github"
        className="relative flex items-center justify-center w-12 h-12 rounded-full bg-[#2A2A2A] transition-all duration-300 hover:bg-[#00FF8C] hover:scale-110"
      >
        <Image
          src="/icons/github.svg"
          alt="github icon"
          width={25}
          height={25}
          loading="eager"
          priority
          className="invert-colors transition-all duration-300 group-hover:scale-110"
        />
      </Link>
      <Link
        href="/twitter"
        className="relative flex items-center justify-center w-12 h-12 rounded-full bg-[#2A2A2A] transition-all duration-300 hover:bg-[#00FF8C] hover:scale-110"
      >
        <Image
          src="/icons/twitter.svg"
          alt="twitter icon"
          width={25}
          height={25}
          loading="eager"
          priority
          className="invert-colors transition-all duration-300 group-hover:scale-110"
        />
      </Link>
      <Link
        href="/figma"
        className="relative flex items-center justify-center w-12 h-12 rounded-full bg-[#2A2A2A] transition-all duration-300 hover:bg-[#00FF8C] hover:scale-110"
      >
        <Image
          src="/icons/figma.svg"
          alt="figma icon"
          width={25}
          height={25}
          loading="eager"
          priority
          className="invert-colors transition-all duration-300 group-hover:scale-110"
        />
      </Link>
    </div>
  );
}
