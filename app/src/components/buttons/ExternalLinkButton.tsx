import { Button, Group, Tooltip } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import type { Props } from "types/ExternalLinkButtonProps";

import * as styles from "./styles.css";

export default function ExternalLinkButton({
  Icon,
  color,
  gradient,
  href,
  label,
  renderLabel,
}: Props) {
  const { hovered, ref } = useHover<HTMLAnchorElement>();

  const variant =
    gradient != null ? "gradient" : hovered ? "filled" : "outline";

  // Either "gradient" or "color" is guaranteed to be defined (but never both)
  const colorProps =
    gradient != null ? { gradient } : { color: color as string };

  return (
    <Tooltip
      hidden={renderLabel}
      label={label}
      openDelay={250}
      position="bottom"
    >
      <Button
        aria-label={label}
        className={styles.button}
        component="a"
        href={href}
        ref={ref}
        size="md"
        target="_blank"
        variant={variant}
        {...colorProps}
      >
        <Group gap={8}>
          {renderLabel && label}
          <Icon size={36} />
        </Group>
      </Button>
    </Tooltip>
  );
}
