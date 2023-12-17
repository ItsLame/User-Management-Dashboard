import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

import { doAdd } from "@/api/users";
import { ListCardProps } from "./ListCard";

export const AddModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <></>
    // <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
    //   <ModalContent>
    //     {(onClose) => (
    //       <>
    //         <ModalHeader className="flex flex-col gap-1">
    //           Modal Title
    //         </ModalHeader>
    //         <ModalBody>
    //           <p>
    //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
    //             pulvinar risus non risus hendrerit venenatis. Pellentesque sit
    //             amet hendrerit risus, sed porttitor quam.
    //           </p>
    //           <p>
    //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
    //             pulvinar risus non risus hendrerit venenatis. Pellentesque sit
    //             amet hendrerit risus, sed porttitor quam.
    //           </p>
    //           <p>
    //             Magna exercitation reprehenderit magna aute tempor cupidatat
    //             consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
    //             incididunt cillum quis. Velit duis sit officia eiusmod Lorem
    //             aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi
    //             consectetur esse laborum eiusmod pariatur proident Lorem eiusmod
    //             et. Culpa deserunt nostrud ad veniam.
    //           </p>
    //         </ModalBody>
    //         <ModalFooter>
    //           <Button color="danger" variant="light" onPress={onClose}>
    //             Close
    //           </Button>
    //           <Button color="primary" onPress={onClose}>
    //             Action
    //           </Button>
    //         </ModalFooter>
    //       </>
    //     )}
    //   </ModalContent>
    // </Modal>
    // <dialog id="AddModal" className="modal modal-bottom sm:modal-middle">
    //   <div className="modal-box">
    //     <h3 className="pb-4 text-lg font-bold">Add New User</h3>

    //     <form
    //       method="POST"
    //       action="/"
    //       onSubmit={(e) => {
    //         doAdd(e);
    //       }}
    //       className="flex flex-col gap-2"
    //     >
    //       <input
    //         id="uname"
    //         type="text"
    //         placeholder="Username"
    //         className="w-full input input-bordered"
    //       />
    //       <div className="flex flex-row gap-2">
    //         <input
    //           id="fname"
    //           type="text"
    //           placeholder="First name"
    //           className="w-full input input-bordered"
    //         />
    //         <input
    //           id="lname"
    //           type="text"
    //           placeholder="Last name"
    //           className="w-full input input-bordered"
    //         />
    //       </div>
    //       <button
    //         className="w-full text-white btn btn-success mt-2"
    //         type="submit"
    //       >
    //         Add
    //       </button>
    //     </form>

    //     <form method="dialog" className="flex flex-col mt-2">
    //       <button className="w-full btn btn-ghost">Cancel</button>
    //       <button className="absolute btn btn-sm btn-circle btn-ghost right-4 top-5">
    //         ✕
    //       </button>
    //     </form>
    //   </div>
    // </dialog>
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
