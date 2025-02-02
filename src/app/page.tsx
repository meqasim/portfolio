import Image from "next/image";
import { clsx } from "clsx";
import { cn } from "../../lib/utils";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/shared/theme-toggle";

export default function Home() {
  return (
    <div className="p-4">
      {/* <h1 className = {clsx("text-blue-500" , "text-5xl" )}>
      <h1 className = {cn("text-yellow-500" , "text-5xl" )}>
      <h1 className = {cn("italic",
      "before:",
      "after:"
      )}> */}

        <div className="w-100 flex justify-end">
        <ThemeToggle/>
        </div>
      <h1 className = {cn("text-blue-400", "text-4xl",)}>
        Welcome to my Portfolio
      </h1>
      <h1 className = {cn("text-blue-400", "text-4xl", "font-oswald")}>
        Welcome to my Portfolio
      </h1>
      <h1 className = {cn("text-blue-400", "text-4xl", "font-localyfont")}>
        Welcome to my Portfolio
      </h1>
      <Button>Click Here</Button>
    </div>
  );
}
