import { AppShell } from "@mantine/core";
import Nav from "components/Nav/Nav";
import type { ReactNode } from "react";

type Props = Readonly<{
  children: ReactNode;
}>;

export default function Page({ children }: Props) {
  return (
    <AppShell
      header={{ height: 60 }}
      padding={{ base: "md", lg: "xl", sm: "lg" }}
    >
      <Nav />
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
