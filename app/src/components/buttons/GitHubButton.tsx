import { useMantineColorScheme } from "@mantine/core";
import { IconBrandGithub } from "@tabler/icons-react";

import ExternalLinkButton from "./ExternalLinkButton";

export default function GitHubButton() {
  const { colorScheme } = useMantineColorScheme();
  return (
    <ExternalLinkButton
      Icon={IconBrandGithub}
      color={colorScheme === "light" ? "#02040a" : "#238636"}
      href="https://github.com/sverg84"
      label="Visit my GitHub"
    />
  );
}
