"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import UserInformationCenterSheet_Form from "./UserInformationCenterSheet_Form";

const UserInformationCenterSheet = () => {
  return (
    <Sheet>
      <SheetTrigger className="mt-4" asChild>
        <Button variant="secondary" className="cursor-pointer">
          Edit Profile
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="mb-4">Are you absolutely sure?</SheetTitle>
          <SheetDescription asChild>
            {/* FORM FIELDS */}
            <UserInformationCenterSheet_Form />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default UserInformationCenterSheet;
