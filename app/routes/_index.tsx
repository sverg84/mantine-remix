import type { MetaFunction } from "@remix-run/node";
import { Welcome } from "~/src/components/Welcome/Welcome";
import { ColorSchemeToggle } from "~/src/components/ColorSchemeToggle/ColorSchemeToggle";

export const meta: MetaFunction = () => {
  return [
    { title: "Mantine Remix App" },
    { name: "description", content: "Welcome to Mantine!" },
  ];
};

export default function Index() {
  return (
    <div>
      <Welcome />
      <ColorSchemeToggle />
    </div>
  );
}
