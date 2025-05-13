"use client";

import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import React, { useEffect, useState } from "react";

import UserInformationCenterSheet from "./UserInformationCenterSheet";

const UserInformationCenter = () => {
  // PROGRESS BAR ANIMATION
  const [progress, setProgress] = useState<number>(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="bg-primary-foreground p-4 rounded-lg">
      <h2 className="text-xl font-semibold">User Information</h2>
      <UserInformationCenterSheet />

      <div className="space-y-4 mt-4">
        <div className="flex flex-col gap-2 mb-8">
          <p className="text-sm text-muted-foreground">Profile Completion</p>
          <Progress value={progress} className="w-[60%]" />
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold">Username:</span>
          <span>john.doe</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold">Email:</span>
          <span>john.doe@dummy.com</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold">Phone:</span>
          <span>+123456789</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold">Location:</span>
          <span>Szczecin </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold">Role:</span>
          <Badge>Admin</Badge>
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          Joined on 2025.01.01
        </p>
      </div>
    </div>
  );
};

export default UserInformationCenter;
