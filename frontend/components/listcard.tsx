"use client";

import React from "react";
import { EditButton, DeleteButton } from "./buttons";

export interface ListCardProps {
  firstName: string;
  lastName: string;
  username: string;
}

export const ListCard: React.FC<ListCardProps> = ({
  firstName = "First",
  lastName = "Last",
  username = "Username",
}) => {
  return (
    <div className="flex flex-row items-center justify-between p-2 rounded-small border-small hover:bg-default-100">
      <p>
        <span>{firstName}</span>
        <span className="font-semibold"> {lastName}</span>
        <span className="italic"> ({username})</span>
      </p>
      <div className="flex flex-col gap-2 sm:flex-row">
        <EditButton {...{ firstName, lastName, username }} />
        <DeleteButton {...{ firstName, lastName, username }} />
      </div>
    </div>
  );
};
