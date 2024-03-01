import { Card } from "@mantine/core";
import { useLocation } from "@remix-run/react";
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
  const ref = React.useRef<HTMLLIElement>(null);

  const { hash } = useLocation();

  React.useEffect(() => {
    if (hash.slice(1) === id && ref.current != null) {
      ref.current.scrollIntoView();
    }
  }, [hash, id]);

  return (
    <Card component="li" padding="xl" withBorder={true}>
      {title && <BodyCardHeader title={title} />}
      <Card.Section px="xl" py="md" withBorder={true}>
        {children}
      </Card.Section>
      {footer}
    </Card>
  );
}
