import {
  Box,
  Center,
  Collapse,
  Divider,
  Drawer,
  rem,
  UnstyledButton,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link } from "@remix-run/react";
import { IconChevronDown } from "@tabler/icons-react";
import ColorInput from "components/ColorInput/ColorInput";
import LatestPushTime from "components/LatestPushTime/LatestPushTime";
import MyName from "consts/MyName";
import useLocalStorageColor from "hooks/useLocalStorageColor";

import * as styles from "./link.css";
import NavLinks from "./NavLinks";

const DRAWER_ZINDEX = 1000000;

type Props = Readonly<{
  opened: boolean;
  onClose: () => void;
}>;

export default function NavDrawer({ opened, onClose }: Props) {
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const [color] = useLocalStorageColor();
  return (
    <Drawer
      hiddenFrom="sm"
      opened={opened}
      padding="md"
      size="50%"
      title={MyName}
      zIndex={DRAWER_ZINDEX}
      onClose={onClose}
    >
      <Divider />

      <Link className={styles.link} to="/">
        Home
      </Link>
      <UnstyledButton className={styles.link} onClick={toggleLinks}>
        <Center inline>
          <Box component="span" mr={5}>
            Features
          </Box>
          <IconChevronDown
            color={color}
            style={{ height: rem(16), width: rem(16) }}
          />
        </Center>
      </UnstyledButton>
      <Collapse in={linksOpened}>
        <NavLinks />
      </Collapse>
      <Link className={styles.link} to="/">
        Learn
      </Link>
      <Link className={styles.link} to="/">
        Academy
      </Link>

      <Divider mb="sm" />

      <ColorInput popoverProps={{ zIndex: DRAWER_ZINDEX }} />

      <Box bottom={0} left="25%" mb="xl" pos="fixed">
        <LatestPushTime zIndex={DRAWER_ZINDEX} />
      </Box>
    </Drawer>
  );
}
