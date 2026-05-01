"use client";
import UpdateProfileModal from "@/components/UpdateProfileModal";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";

const page = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  return (
    <div className="container mx-auto  min-h-[60vh] flex justify-center items-center ">
      <Card className="w-96 mx-auto flex flex-col justify-center items-center border border-gray-200   shadow-xl ">
        <Avatar className="h-20 w-20">
          <Avatar.Image
            alt="John Doe"
            src={user?.image}
            referrerPolicy="no-referrer"
          />
          <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
        </Avatar>
        <h2 className="text-xl font-bold">{user?.name}</h2>
        <p className="text-muted">{user?.email}</p>
        <UpdateProfileModal />
      </Card>
    </div>
  );
};

export default page;
