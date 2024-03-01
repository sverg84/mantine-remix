import { IconBrandLinkedin } from "@tabler/icons-react";

import ExternalLinkButton from "./ExternalLinkButton";

export default function LinkedInButton() {
  return (
    <ExternalLinkButton
      Icon={IconBrandLinkedin}
      color="#0077b5"
      href="https://www.linkedin.com/in/stephen-vergara-2bab8614b/"
      label="Find me on LinkedIn"
    />
  );
}
