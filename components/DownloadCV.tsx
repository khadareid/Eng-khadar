"use client";
import { toast } from "@/hooks/use-toast";

import { Button } from "./ui/button";

export default function DownloadCV() {
  const downloadCV = () => {
    toast({
      title: "Feel Free to add your CV",
      description:
        "Add Your CV and pdf and implement the download functionality",
    });
  };
  return (
    <Button
      onClick={downloadCV}
      className="body-2  rounded-[12px] bg-gray-900 px-4 py-1 text-gray-50 transition-colors duration-300  hover:bg-gray-300 hover:text-gray-800"
    >
      Download CV
    </Button>
  );
}
