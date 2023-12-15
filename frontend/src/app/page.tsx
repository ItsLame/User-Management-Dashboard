"use client";
import React from "react";

interface ListCardProps {
  firstName: string;
  lastName: string;
  username: string;
}

const ListCard: React.FC<ListCardProps> = ({
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

const AddModal = () => {
  return (
    <dialog id="AddModal" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h3 className="pb-4 text-lg font-bold">Add New User</h3>
        <div className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Username"
            className="w-full input input-bordered"
          />
          <div className="flex flex-row gap-2">
            <input
              type="text"
              placeholder="First name"
              className="w-full input input-bordered"
            />
            <input
              type="text"
              placeholder="Last name"
              className="w-full input input-bordered"
            />
          </div>
          <form method="dialog" className="flex flex-col gap-2 mt-3 ">
            <button className="w-full text-white btn btn-success">Add</button>
            <button className="w-full btn btn-ghost">Cancel</button>
            <button className="absolute btn btn-sm btn-circle btn-ghost right-4 top-5">
              ✕
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

const EditModal: React.FC<ListCardProps> = ({
  firstName = "First",
  lastName = "Last",
  username = "Username",
}) => {
  return (
    <dialog
      id={`EditModal-${username}`}
      className="modal modal-bottom sm:modal-middle"
    >
      <div className="modal-box">
        <h3 className="pb-4 text-lg font-bold">Edit User</h3>
        <div className="flex flex-col gap-2">
          <input
            disabled
            type="text"
            placeholder="Username"
            value={username}
            className="w-full input input-bordered"
          />
          <div className="flex flex-row gap-2">
            <input
              type="text"
              placeholder="First name"
              value={firstName}
              className="w-full input input-bordered"
            />
            <input
              type="text"
              placeholder="Last name"
              value={lastName}
              className="w-full input input-bordered"
            />
          </div>
          <form method="dialog" className="flex flex-col gap-2 mt-3">
            <button className="w-full text-white btn btn-success">
              Save Changes
            </button>
            <button className="w-full btn btn-ghost">Cancel</button>
            <button className="absolute btn btn-sm btn-circle btn-ghost right-4 top-5">
              ✕
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

const DeleteModal: React.FC<ListCardProps> = ({
  firstName = "First",
  lastName = "Last",
  username = "Username",
}) => {
  return (
    <dialog
      id={`DeleteModal-${username}`}
      className="modal modal-bottom sm:modal-middle"
    >
      <div className="modal-box">
        <h3 className="pb-4 text-lg font-bold">Delete User</h3>
        <div className="flex flex-col gap-2">
          <p>Are you sure you want to delete user:</p>
          <p>
            <span>{firstName}</span>
            <span className="font-semibold"> {lastName}</span>
            <span className="italic"> ({username})</span>
          </p>
          <form method="dialog" className="flex flex-col gap-2 mt-3">
            <button className="w-full btn btn-outline btn-error">Delete</button>
            <button className="w-full btn btn-ghost">Cancel</button>
            <button className="absolute btn btn-sm btn-circle btn-ghost right-4 top-5">
              ✕
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default function Home() {
  return (
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

      <AddModal />
    </main>
  );
}
