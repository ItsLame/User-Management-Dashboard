import { doGetUsers } from "@/api/users";
import React from "react";
import { ListCardProps, ListCard } from "@/components/listcard";

export async function UsersList() {
  const users = await doGetUsers();

  return (
    <>
      {JSON.parse(JSON.stringify(users)).map(
        (user: ListCardProps, index: number) => {
          return <ListCard key={index} {...user} />;
        }
      )}
    </>
  );
}
