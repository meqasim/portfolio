import { cn } from "../../lib/utils";

export default function grainEffect() {
    return (
        <div
        className={cn(
            "fixed",
            "top-0",
            "left-0",
            "w-full",
            "h-full",
        )}
        ></div>
    )
}

// "absolute",
//             "w-full",
//             "h-full",
//             "pointer-events-none",
//             "select-none",
//             "z-10",
//             "grain",
//             "grain-anim"