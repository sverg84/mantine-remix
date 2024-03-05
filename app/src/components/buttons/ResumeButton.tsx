import { IconFileDownload } from "@tabler/icons-react";
import useLocalStorageColor from "hooks/useLocalStorageColor";

import ExternalLinkButton from "./ExternalLinkButton";

export default function ResumeButton() {
  const [color] = useLocalStorageColor();
  return (
    <ExternalLinkButton
      Icon={IconFileDownload}
      color={color}
      href="https://dv8qyiytu2cuu.cloudfront.net/sverg_resume.pdf"
      label="Download resume"
    />
  );
}
