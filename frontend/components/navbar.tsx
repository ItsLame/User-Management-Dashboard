import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
import { link as linkStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";
import { ThemeSwitch } from "@/components/theme-switch";
import { AddButton } from "./buttons";

export function Navbar() {
  return (
    <NextUINavbar
      maxWidth="xl"
      position="sticky"
      className="border-b-1 dark:border-neutral-700"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex items-center justify-start gap-1" href="/">
            <p className="hidden font-bold sm:flex text-inherit">
              User Management Dashboard
            </p>
            <p className="flex font-bold sm:hidden text-inherit">UMD</p>
          </NextLink>
        </NavbarBrand>

        <ul className="justify-start hidden gap-4 ml-2 lg:flex">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex">
          <AddButton />
        </NavbarItem>
        <NavbarItem className="hidden gap-2 sm:flex">
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="pl-4 sm:hidden basis-full" justify="end">
        <AddButton />
        <ThemeSwitch />
      </NavbarContent>
    </NextUINavbar>
  );
}
