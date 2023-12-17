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
import { doAdd, doEdit, doDelete, doGetUser } from "@/api/users";
import { useRouter } from "next/navigation";

const validateUsername = (username: string) => {
  return username.match(/^[a-zA-Z0-9_]{4,44}$/) ? false : true;
};

const validateFirstname = (firstname: string) => {
  return firstname.match(/^[a-zA-Z]{4,48}$/) ? false : true;
};

const validateLastname = (lastname: string) => {
  return lastname.match(/^[a-zA-Z]{1,55}$/) ? false : true;
};

export function AddModal({
  isOpen,
  onOpenChange,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
}) {
  const [username, setUsername] = React.useState("");
  const [firstname, setFirstname] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const router = useRouter();

  const refreshData = () => {
    router.refresh();
  };

  const resetForm = () => {
    setUsername("");
    setFirstname("");
    setLastname("");
  };

  const validateForm = () => {
    return (
      !validateUsername(username) &&
      !validateFirstname(firstname) &&
      !validateLastname(lastname)
    );
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="bottom-center"
        onClose={resetForm}
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
                  if (validateForm()) {
                    doAdd(e);
                    onClose();
                    refreshData();
                  }
                }}
              >
                <ModalBody>
                  <Input
                    autoFocus
                    name="uname"
                    label="Username"
                    placeholder="e.g. soldier76"
                    variant="bordered"
                    onValueChange={setUsername}
                    isInvalid={validateUsername(username)}
                    errorMessage={
                      validateUsername(username) &&
                      "Username should be 4-44 characters long and contain only letters, numbers and underscores"
                    }
                  />
                  <Input
                    label="First Name"
                    name="fname"
                    placeholder="e.g. Jack"
                    variant="bordered"
                    onValueChange={setFirstname}
                    isInvalid={validateFirstname(firstname)}
                    errorMessage={
                      validateFirstname(firstname) &&
                      "First name should be 4-48 characters long and contain only letters"
                    }
                  />
                  <Input
                    label="Last Name"
                    name="lname"
                    placeholder="e.g. Morrison"
                    variant="bordered"
                    onValueChange={setLastname}
                    isInvalid={validateLastname(lastname)}
                    errorMessage={
                      validateLastname(lastname) &&
                      "Last name should be 1-55 characters long and contain only letters"
                    }
                  />
                </ModalBody>
                <ModalFooter>
                  <Button
                    className="w-full"
                    color="primary"
                    type="submit"
                    isDisabled={!validateForm()}
                  >
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
  const [firstname, setFirstname] = React.useState(user.firstname);
  const [lastname, setLastname] = React.useState(user.lastname);
  const router = useRouter();

  const refreshData = () => {
    router.refresh();
  };

  const resetForm = () => {
    setFirstname(user.firstname);
    setLastname(user.lastname);
  };

  const validateForm = () => {
    return !validateFirstname(firstname) && !validateLastname(lastname);
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="bottom-center"
        onClose={resetForm}
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
                  if (validateForm()) {
                    doEdit(e);
                    onClose();
                    refreshData();
                  }
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
                    onValueChange={setFirstname}
                    isInvalid={validateFirstname(firstname)}
                    errorMessage={
                      validateFirstname(firstname) &&
                      "First name should be 4-48 characters long and contain only letters"
                    }
                  />
                  <Input
                    label="Last Name"
                    name="lname"
                    placeholder="e.g. Morrison"
                    defaultValue={user.lastname}
                    variant="bordered"
                    onValueChange={setLastname}
                    isInvalid={validateLastname(lastname)}
                    errorMessage={
                      validateLastname(lastname) &&
                      "Last name should be 1-55 characters long and contain only letters"
                    }
                  />
                </ModalBody>
                <ModalFooter>
                  <Button
                    className="w-full"
                    color="primary"
                    type="submit"
                    isDisabled={!validateForm()}
                  >
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
