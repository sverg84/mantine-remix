import { Card } from "@mantine/core";
import * as React from "react";

import BodyCardHeader from "./BodyCardHeader";

type Props = Readonly<{
  children: React.ReactNode;
  id: string;
  title?: string;
}>;

export default function BodyCard({ children, id, title }: Props) {
  return (
    <Card component="li" id={id} padding="xl" withBorder={true}>
      {title && <BodyCardHeader title={title} />}
      <Card.Section px="xl" py="md" withBorder={true}>
        {children}
      </Card.Section>
    </Card>
  );
}
