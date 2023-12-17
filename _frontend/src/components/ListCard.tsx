import React from "react";
import { EditModal, DeleteModal } from "./Modals";

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
    <div className="flex flex-row items-center justify-between p-2 border-2 rounded-md hover:border-primary">
      <p>
        <span>{firstName}</span>
        <span className="font-semibold"> {lastName}</span>
        <span className="italic"> ({username})</span>
      </p>
      <div className="flex gap-3">
        <button
          className="btn btn-outline btn-primary"
          onClick={() =>
            (
              document.getElementById(
                `EditModal-${username}`
              ) as HTMLFormElement
            ).showModal()
          }
        >
          Edit
        </button>
        <button
          className="btn btn-outline btn-error"
          onClick={() =>
            (
              document.getElementById(
                `DeleteModal-${username}`
              ) as HTMLFormElement
            ).showModal()
          }
        >
          Delete
        </button>
      </div>

      <EditModal
        username={username}
        firstName={firstName}
        lastName={lastName}
      />

      <DeleteModal
        username={username}
        firstName={firstName}
        lastName={lastName}
      />
    </div>
  );
};
