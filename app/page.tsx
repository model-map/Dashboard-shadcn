import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CirclePlus } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Button size="xl" className={cn("rounded-full", "cursor-pointer")}>
        <CirclePlus />
        Click me!
      </Button>
    </div>
  );
}
