import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Snippet,
} from "@nextui-org/react";
import { ListCardProps } from "./listcard";
import { doAdd, doEdit, doDelete } from "@/api/users";
import { useRouter } from "next/navigation";

export function AddModal({
  isOpen,
  onOpenChange,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
}) {
  const router = useRouter();
  const refreshData = () => {
    router.refresh();
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="bottom-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Add New User
              </ModalHeader>
              <form
                id="addForm"
                onSubmit={(e) => {
                  e.preventDefault();
                  doAdd(e);
                  onClose();
                  refreshData();
                  refreshData();
                }}
              >
                <ModalBody>
                  <Input
                    autoFocus
                    name="uname"
                    label="Username"
                    placeholder="e.g. soldier76"
                    variant="bordered"
                  />
                  <Input
                    label="First Name"
                    name="fname"
                    placeholder="e.g. Jack"
                    variant="bordered"
                  />
                  <Input
                    label="Last Name"
                    name="lname"
                    placeholder="e.g. Morrison"
                    variant="bordered"
                  />
                </ModalBody>
                <ModalFooter>
                  <Button className="w-full" color="primary" type="submit">
                    Add
                  </Button>
                  <Button color="default" variant="flat" onPress={onClose}>
                    Cancel
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export function EditModal({
  isOpen,
  onOpenChange,
  user,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
  user: ListCardProps;
}) {
  const router = useRouter();
  const refreshData = () => {
    router.refresh();
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="bottom-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Edit User
              </ModalHeader>
              <form
                id="editForm"
                onSubmit={(e) => {
                  e.preventDefault();
                  doEdit(e);
                  onClose();
                  refreshData();
                  refreshData();
                }}
              >
                <ModalBody>
                  <Input
                    isDisabled
                    label="Username"
                    name="uname"
                    defaultValue={user.username}
                    variant="bordered"
                  />
                  <Input
                    autoFocus
                    label="First Name"
                    name="fname"
                    placeholder="e.g. Jack"
                    defaultValue={user.firstname}
                    variant="bordered"
                  />
                  <Input
                    label="Last Name"
                    name="lname"
                    placeholder="e.g. Morrison"
                    defaultValue={user.lastname}
                    variant="bordered"
                  />
                </ModalBody>
                <ModalFooter>
                  <Button className="w-full" color="primary" type="submit">
                    Save Changes
                  </Button>
                  <Button color="default" variant="flat" onPress={onClose}>
                    Cancel
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export function DeleteModal({
  isOpen,
  onOpenChange,
  user,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
  user: ListCardProps;
}) {
  const router = useRouter();
  const refreshData = () => {
    router.refresh();
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="bottom-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Delete User
              </ModalHeader>
              <ModalBody>
                <p>Are you sure you want to delete the following user:</p>
                <Snippet hideCopyButton hideSymbol>
                  <p>
                    <span>{user.firstname}</span>
                    <span className="font-semibold"> {user.lastname}</span>
                    <span className="italic"> ({user.username})</span>
                  </p>
                </Snippet>
              </ModalBody>
              <ModalFooter>
                <Button
                  className="w-full"
                  color="danger"
                  onPress={() => {
                    doDelete(user.username);
                    onClose();
                    refreshData();
                    refreshData();
                  }}
                >
                  Delete
                </Button>
                <Button color="default" variant="flat" onPress={onClose}>
                  Cancel
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
