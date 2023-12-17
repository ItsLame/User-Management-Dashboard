import { AddButton } from "@/components/buttons";
import { UsersList } from "./userslist";

export default function Home() {
  return (
    <section className="flex flex-col gap-4 py-2">
      <div className="w-full sm:hidden">
        <AddButton />
      </div>
      <div className="flex flex-col flex-1 w-full gap-1 px-2 py-2 border-small rounded-small border-default-200 dark:border-default-100">
        <UsersList />
      </div>
    </section>
  );
}
