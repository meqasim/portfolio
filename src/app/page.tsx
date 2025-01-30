// import Image from "next/image";
// import { clsx } from "clsx";
import { cn } from "../../lib/utils";

export default function Home() {
  return (
    <div>
      {/* <h1 className = {clsx("text-blue-500" , "text-5xl" )}>
      <h1 className = {cn("text-yellow-500" , "text-5xl" )}>
      <h1 className = {cn("italic",
      "before:",
      "after:"
      )}> */}
      <h1 className = {cn("text-blue-400", "text-4xl",)}>
        Welcome to my Portfolio
      </h1>
      <h1 className = {cn("text-blue-400", "text-4xl", "font-oswald")}>
        Welcome to my Portfolio
      </h1>
      <h1 className = {cn("text-blue-400", "text-4xl", "font-localyfont")}>
        Welcome to my Portfolio
      </h1>
    </div>
  );
}
