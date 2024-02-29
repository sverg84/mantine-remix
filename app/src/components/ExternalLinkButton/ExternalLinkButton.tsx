import { Button } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import type { TablerIconsProps } from "@tabler/icons-react";

type Props = Readonly<{
  Icon: (props: TablerIconsProps) => JSX.Element;
  ariaLabel: string;
  color: string;
  href: string;
}>;

export default function ExternalLinkButton({
  Icon,
  ariaLabel,
  color,
  href,
}: Props) {
  const { hovered, ref } = useHover<HTMLAnchorElement>();

  return (
    <Button
      aria-label={ariaLabel}
      color={color}
      component="a"
      href={href}
      ref={ref}
      target="_blank"
      variant={hovered ? "filled" : "outline"}
    >
      <Icon size={36} />
    </Button>
  );
}
