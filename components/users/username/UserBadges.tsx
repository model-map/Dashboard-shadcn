import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { BadgeCheck, Candy, Citrus, Shield } from "lucide-react";
import React from "react";

const UserBadges = () => {
  return (
    <div className="bg-primary-foreground p-4 rounded-lg">
      <h1 className="text-xl font-semibold">User Badges</h1>
      <div className="flex gap-4 mt-4">
        <HoverCard>
          <HoverCardTrigger>
            <BadgeCheck
              size={36}
              className="cursor-pointer rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2"
            />
          </HoverCardTrigger>
          <HoverCardContent>
            <h2 className="font-bold mb-2">Verified User</h2>
            <p className="text-sm text-muted-foreground">
              This user has been verified
            </p>
          </HoverCardContent>
        </HoverCard>
        <HoverCard>
          <HoverCardTrigger>
            <Shield
              size={36}
              className="cursor-pointer rounded-full bg-amber-500/30 border-1 border-amber-500/50 p-2"
            />
          </HoverCardTrigger>
          <HoverCardContent>
            <h2 className="font-bold mb-2">Verified User</h2>
            <p className="text-sm text-muted-foreground">
              This user has been verified
            </p>
          </HoverCardContent>
        </HoverCard>
        <HoverCard>
          <HoverCardTrigger>
            <Candy
              size={36}
              className="cursor-pointer rounded-full bg-pink-500/30 border-1 border-pink-500/50 p-2"
            />
          </HoverCardTrigger>
          <HoverCardContent>
            <h2 className="font-bold mb-2">Verified User</h2>
            <p className="text-sm text-muted-foreground">
              This user has been verified
            </p>
          </HoverCardContent>
        </HoverCard>
        <HoverCard>
          <HoverCardTrigger>
            <Citrus
              size={36}
              className="cursor-pointer rounded-full bg-orange-500/30 border-1 border-orange-500/50 p-2"
            />
          </HoverCardTrigger>
          <HoverCardContent>
            <h2 className="font-bold mb-2">Verified User</h2>
            <p className="text-sm text-muted-foreground">
              This user has been verified
            </p>
          </HoverCardContent>
        </HoverCard>
      </div>
    </div>
  );
};

export default UserBadges;
