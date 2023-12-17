import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { ListCard } from "@/components/listcard";
import { Button } from "@nextui-org/button";
import { AddButton } from "@/components/buttons";

export default function Home() {
  return (
    <section className="flex flex-col gap-4 py-2">
      <div className="w-full sm:hidden">
        <AddButton />
      </div>
      <div className="flex flex-col flex-1 w-full gap-1 px-2 py-2 border-small rounded-small border-default-200 dark:border-default-100">
        <ListCard />
        <ListCard />
      </div>
    </section>
  );
}
