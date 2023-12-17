import React from "react";

const port = 4000;

export async function doGetUsers() {
  const users = await fetch(`http://localhost:${port}/getusers`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    next: { revalidate: 1 },
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(err);
      return {};
    });

  return users;
}

export async function doAdd(event: React.FormEvent<HTMLFormElement>) {
  const e = event.currentTarget;

  await fetch(`http://localhost:${port}/addUser`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: e.uname.value,
      firstName: e.fname.value,
      lastName: e.lname.value,
    }),
  });
}

export async function doEdit(event: React.FormEvent<HTMLFormElement>) {
  const e = event.currentTarget;

  await fetch(`http://localhost:${port}/editUser`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: e.uname.value,
      firstName: e.fname.value,
      lastName: e.lname.value,
    }),
  });
}

export async function doDelete(username: string) {
  await fetch(`http://localhost:${port}/deleteUser`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
    }),
  });
}
