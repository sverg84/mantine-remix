import type { MantineGradient } from "@mantine/core";
import type { TablerIconsProps } from "@tabler/icons-react";

interface PropsCommon {
  Icon: (props: TablerIconsProps) => JSX.Element;
  ariaLabel: string;
  href: string;
}

interface PropsGradient extends PropsCommon {
  color?: never;
  gradient: MantineGradient;
}

interface PropsStandard extends PropsCommon {
  color: string;
  gradient?: never;
}

export type Props = Readonly<PropsGradient | PropsStandard>;
