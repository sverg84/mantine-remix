import { IconBrandGithub } from "@tabler/icons-react";

import ExternalLinkButton from "./ExternalLinkButton";

export default function GitHubButton() {
  return (
    <ExternalLinkButton
      Icon={IconBrandGithub}
      color="#238636"
      href="https://github.com/sverg84"
      label="Visit my GitHub"
    />
  );
}
