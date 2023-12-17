import React from "react";

const port = 4000;

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

export async function doGetUsers() {
  const users = await fetch(`http://localhost:${port}/getUsers`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
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
