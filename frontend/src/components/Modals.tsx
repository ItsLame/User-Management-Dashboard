import React from "react";
import { doAdd } from "@/api/users";
import { ListCardProps } from "./ListCard";

export const AddModal = () => {
  return (
    <dialog id="AddModal" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h3 className="pb-4 text-lg font-bold">Add New User</h3>
        <div className="flex flex-col gap-2">
          <form
            method="POST"
            action="/"
            onSubmit={(e) => {
              doAdd(e);
            }}
          >
            <input
              id="uname"
              type="text"
              placeholder="Username"
              className="w-full input input-bordered"
            />
            <div className="flex flex-row gap-2">
              <input
                id="fname"
                type="text"
                placeholder="First name"
                className="w-full input input-bordered"
              />
              <input
                id="lname"
                type="text"
                placeholder="Last name"
                className="w-full input input-bordered"
              />
            </div>
            <button className="w-full text-white btn btn-success" type="submit">
              Add
            </button>
          </form>

          <form method="dialog" className="flex flex-col gap-2 mt-3 ">
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

export const EditModal: React.FC<ListCardProps> = ({
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
            defaultValue={username}
            className="w-full input input-bordered"
          />
          <div className="flex flex-row gap-2">
            <input
              type="text"
              placeholder="First name"
              defaultValue={firstName}
              className="w-full input input-bordered"
            />
            <input
              type="text"
              placeholder="Last name"
              defaultValue={lastName}
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

export const DeleteModal: React.FC<ListCardProps> = ({
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
