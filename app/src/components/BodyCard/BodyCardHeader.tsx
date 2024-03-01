import { CardSection, rem, Title } from "@mantine/core";
import useLocalStorageOrLoaderColor from "hooks/useLocalStorageOrLoaderColor";

import * as styles from "./styles.css";

type Props = Readonly<{ title: string }>;

export default function BodyCardHeader({ title }: Props) {
  const [color] = useLocalStorageOrLoaderColor();

  return (
    <CardSection
      className={styles.header}
      component="header"
      py={rem(8)}
      withBorder={true}
    >
      <Title c={color} ta="center">
        {title}
      </Title>
    </CardSection>
  );
}
