import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
  Snippet,
} from "@nextui-org/react";

export function AddModal({
  isOpen,
  onOpenChange,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
}) {
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
              <ModalBody>
                <Input
                  autoFocus
                  label="Username"
                  placeholder="e.g. soldier76"
                  variant="bordered"
                />
                <Input
                  label="First Name"
                  placeholder="e.g. Jack"
                  variant="bordered"
                />
                <Input
                  label="Last Name"
                  placeholder="e.g. Morrison"
                  variant="bordered"
                />
              </ModalBody>
              <ModalFooter>
                <Button className="w-full" color="primary" onPress={onClose}>
                  Add
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

export function EditModal({
  isOpen,
  onOpenChange,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
}) {
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
              <ModalBody>
                <Input
                  isDisabled
                  label="Username"
                  defaultValue="soldier76"
                  variant="bordered"
                />
                <Input
                  autoFocus
                  label="First Name"
                  placeholder="e.g. Jack"
                  variant="bordered"
                />
                <Input
                  label="Last Name"
                  placeholder="e.g. Morrison"
                  variant="bordered"
                />
              </ModalBody>
              <ModalFooter>
                <Button className="w-full" color="primary" onPress={onClose}>
                  Save Changes
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

export function DeleteModal({
  isOpen,
  onOpenChange,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
}) {
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
                    <span>Jack</span>
                    <span className="font-semibold"> Morrison</span>
                    <span className="italic"> (soldier76)</span>
                  </p>
                </Snippet>
              </ModalBody>
              <ModalFooter>
                <Button className="w-full" color="danger" onPress={onClose}>
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
