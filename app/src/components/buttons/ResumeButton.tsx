import { IconFileDownload } from "@tabler/icons-react";
import useLocalStorageOrLoaderColor from "hooks/useLocalStorageOrLoaderColor";

import ExternalLinkButton from "./ExternalLinkButton";

export default function ResumeButton() {
  const [color] = useLocalStorageOrLoaderColor();
  return (
    <ExternalLinkButton
      Icon={IconFileDownload}
      color={color}
      href="https://dv8qyiytu2cuu.cloudfront.net/sverg_resume.pdf"
      label="Download resume"
    />
  );
}
