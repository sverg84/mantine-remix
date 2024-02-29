import { IconBrandGithub } from "@tabler/icons-react";

import ExternalLinkButton from "../ExternalLinkButton/ExternalLinkButton";

export default function GitHubButton() {
  return (
    <ExternalLinkButton
      Icon={IconBrandGithub}
      ariaLabel="Visit my GitHub"
      color="#171515"
      href="https://github.com/sverg84"
    />
  );
}
