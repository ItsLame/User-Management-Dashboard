import { UsersList } from "./userslist";

export default function Home() {
  return (
    <section className="flex flex-col gap-2 py-4">
      <UsersList />
    </section>
  );
}
