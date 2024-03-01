import { Button, Tooltip } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import type { Props } from "types/ExternalLinkButtonProps";

export default function ExternalLinkButton({
  Icon,
  ariaLabel,
  color,
  gradient,
  href,
}: Props) {
  const { hovered, ref } = useHover<HTMLAnchorElement>();

  const variant =
    gradient != null ? "gradient" : hovered ? "filled" : "outline";

  // Either "gradient" or "color" is guaranteed to be defined (but never both)
  const colorProps =
    gradient != null ? { gradient } : { color: color as string };

  return (
    <Tooltip label={ariaLabel} openDelay={250} position="bottom">
      <Button
        aria-label={ariaLabel}
        component="a"
        href={href}
        ref={ref}
        size="compact-xl"
        target="_blank"
        variant={variant}
        {...colorProps}
      >
        <Icon size={36} />
      </Button>
    </Tooltip>
  );
}
