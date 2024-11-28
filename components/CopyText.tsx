"use client";

import Image from "next/image";

import { useEffect, useState } from "react";
import { MdOutlineDone } from "react-icons/md";

import { toast } from "@/hooks/use-toast";

import { Button } from "./ui/button";
interface CopyPros {
  imageOneUrl: string;
  imageTwoUrl: string;
  text: string;
  isEmail: true | false;
}
export default function CopyText({
  imageOneUrl,
  isEmail,
  imageTwoUrl,
  text,
}: CopyPros) {
  const [isTextCopied, setTextCopy] = useState(false);

  const copyText = () => {
    if (isTextCopied) return;
    if (isEmail === true) {
      navigator.clipboard.writeText(text);

      toast({
        title: "Email copied Successfully",
        description: "You can now paste it in your email client",
      });
      setTextCopy(true);
    } else {
      navigator.clipboard.writeText(text);
      toast({
        title: "Phone copied Successfully",
        description: "You can now paste it in your phone client",
      });
      setTextCopy(true);
    }
  };

  useEffect(
    function () {
      const timer = setTimeout(() => {
        setTextCopy(false);
      }, 1000);

      return () => clearTimeout(timer);
    },

    [isTextCopied]
  );
  return (
    <div className="mt-4 flex w-full items-center justify-center gap-2">
      <Image
        src={imageOneUrl}
        alt="email icon"
        width={20}
        height={20}
        loading="eager"
        priority
        className="invert-colors"
      />
      <p className="heading-2 text-gray-900">{text}</p>
      <Button onClick={copyText} className="bg-transparent hover:bg-gray-200">
        {isTextCopied && <MdOutlineDone className="text-gray-500" />}
        {!isTextCopied && (
          <Image
            src={imageTwoUrl}
            alt="copy icon"
            width={20}
            height={20}
            loading="eager"
            priority
            className="invert-colors"
          />
        )}
      </Button>
    </div>
  );
}
