import Image from "next/image"
import { Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full bg-[#1E1E1E] py-8">
      <div className="container mx-auto flex items-center justify-center">
        <div className="flex items-center justify-center gap-2 text-gray-400">
          <Image
            src="/icons/copyright.svg"
            alt="Copyright icon"
            width={20}
            height={20}
            className="invert"
          />
          <p className="text-sm">
            2024 | Coded with <Heart className="inline-block h-4 w-4 text-[#00FF8C]" /> by Khadar Eid
          </p>
        </div>
      </div>
    </footer>
  )
}

