"use client";

import React from "react";
import { EditButton, DeleteButton } from "./buttons";

export interface ListCardProps {
  firstname: string;
  lastname: string;
  username: string;
  user_id?: number;
}

export function ListCard({
  firstname = "First",
  lastname = "Last",
  username = "Username",
}: ListCardProps) {
  return (
    <div className="flex items-center justify-between gap-2 p-2 rounded-small border-small hover:bg-default-100 hover:border-black dark:border-neutral-700 dark:hover:border-white">
      <p className="[overflow-wrap:anywhere]">
        <span>{firstname}</span>
        <span className="font-semibold "> {lastname}</span>
        <span className="italic "> ({username})</span>
      </p>
      <div className="flex flex-col gap-2 sm:flex-row">
        <EditButton {...{ firstname, lastname, username }} />
        <DeleteButton {...{ firstname, lastname, username }} />
      </div>
    </div>
  );
}
