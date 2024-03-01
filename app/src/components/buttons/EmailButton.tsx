import { IconMailFilled } from "@tabler/icons-react";

import ExternalLinkButton from "./ExternalLinkButton";

export default function EmailButton() {
  return (
    <ExternalLinkButton
      Icon={IconMailFilled}
      gradient={{ from: "#5e72e3", to: "#70f0fe" }}
      href="mailto:sverg84@gmail.com"
      label="Send me an email"
    />
  );
}
