"use client";

import React from "react";
import { Button } from "@nextui-org/button";
import { useDisclosure } from "@nextui-org/react";
import { AddModal, EditModal, DeleteModal } from "./modals";

import { doAdd, doGetUsers } from "@/api/users";
import { ListCardProps } from "./listcard";

export function AddButton() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} color="primary" className="w-full">
        Add New User
      </Button>
      <AddModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
}

export function EditButton({ ...user }: ListCardProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} color="primary" variant="ghost">
        Edit
      </Button>
      <EditModal isOpen={isOpen} onOpenChange={onOpenChange} user={user} />
    </>
  );
}

export function DeleteButton({ ...user }: ListCardProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} color="danger" variant="ghost">
        Delete
      </Button>
      <DeleteModal isOpen={isOpen} onOpenChange={onOpenChange} user={user} />
    </>
  );
}
