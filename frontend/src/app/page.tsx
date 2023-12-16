"use client";

import React from "react";
import { doGetUsers, doAdd } from "@/api/users";
import { configureStore } from "@reduxjs/toolkit";
import { ListCard } from "@/components/ListCard";
import { AddModal } from "@/components/Modals";

interface UsersProps {
  users: [
    {
      username: string;
      firstName: string;
      lastName: string;
    }
  ];
}

export const UsersContext = React.createContext<UsersProps>({
  users: [
    {
      username: "",
      firstName: "",
      lastName: "",
    },
  ],
});

export default function Home() {
  const [users, setUsers] = React.useState({
    users: [
      {
        username: "",
        firstName: "",
        lastName: "",
      },
    ],
  });

  // React.useEffect(() => {
  //   handleGetUsers();
  // }, []);

  // const handleSetUsers = ({
  //   users = [
  //     {
  //       username: "bobmarley13",
  //       firstName: "Bob",
  //       lastName: "Marley",
  //     },
  //   ],
  // }: UsersProps) => {
  //   setUsers(users);
  // };

  async function handleGetUsers() {
    const users = await doGetUsers();
    console.log(users);
  }

  return (
    // <UsersContext.Provider value={setUsers}>
    <main className="flex flex-col min-h-screen bg-white">
      <div className="justify-between navbar text-neutral-content">
        <span className="text-xl font-semibold text-black select-none">
          User Management Dashboard
        </span>
        <button
          className="btn btn-primary"
          onClick={() =>
            (document.getElementById("AddModal") as HTMLFormElement).showModal()
          }
        >
          Add New User
        </button>
      </div>

      <div className="flex flex-col flex-1 gap-2 p-2 m-2 mb-3 border-2 rounded-md">
        <ListCard username="sallynatan123" firstName="Sallyna" lastName="Tan" />
        <ListCard username="bobmarley13" firstName="Bob" lastName="Marley" />
      </div>

      <button className="btn" onClick={handleGetUsers}>
        FETCH
      </button>

      <AddModal />
    </main>
    // </UsersContext.Provider>
  );
}
