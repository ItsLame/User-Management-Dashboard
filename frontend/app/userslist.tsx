import React from "react";
import { doGetUsers } from "@/api/users";
import { ListCardProps, ListCard } from "@/components/listcard";

export async function UsersList() {
  const users = await doGetUsers();

  return (
    <>
      {Object.keys(users).length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full">
          <p className="text-md text-default-500">No users found.</p>
        </div>
      ) : (
        JSON.parse(JSON.stringify(users))
          .sort((a: ListCardProps, b: ListCardProps) => {
            if (a.user_id && b.user_id) {
              return a.user_id > b.user_id ? 1 : -1;
            }
          })
          .map((user: ListCardProps, index: number) => {
            return <ListCard key={index} {...user} />;
          })
      )}
    </>
  );
}
