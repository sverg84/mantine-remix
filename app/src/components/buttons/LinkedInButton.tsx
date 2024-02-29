import { IconBrandLinkedin } from "@tabler/icons-react";

import ExternalLinkButton from "./ExternalLinkButton";

export default function LinkedInButton() {
  return (
    <ExternalLinkButton
      Icon={IconBrandLinkedin}
      ariaLabel="Find me on LinkedIn"
      color="#0077b5"
      href="https://www.linkedin.com/in/stephen-vergara-2bab8614b/"
    />
  );
}
