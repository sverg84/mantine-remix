import { Card } from "@mantine/core";
import type { AboutMeCardFooterType } from "components/about/AboutMeCardFooter";
import * as React from "react";

import BodyCardHeader from "./BodyCardHeader";

type Props = Readonly<{
  children: React.ReactNode;
  footer?: ReturnType<AboutMeCardFooterType>;
  id: string;
  title?: string;
}>;

export default function BodyCard({ children, footer, id, title }: Props) {
  return (
    <Card component="li" id={id} padding="xl" withBorder={true}>
      {title && <BodyCardHeader title={title} />}
      <Card.Section px="xl" py="md" withBorder={true}>
        {children}
      </Card.Section>
      {footer}
    </Card>
  );
}
