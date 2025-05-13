import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserCardContainer = () => {
  return (
    <div className="bg-primary-foreground p-4 rounded-lg space-y-2">
      <div className="flex items-center gap-2">
        <Avatar className="size-12">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h1 className="text-xl font-semibold">John Doe</h1>
      </div>
      <p className="text-muted-foreground text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor.
      </p>
    </div>
  );
};

export default UserCardContainer;
