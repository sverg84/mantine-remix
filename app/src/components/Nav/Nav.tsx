import {
  Anchor,
  AppShellHeader,
  Box,
  Burger,
  Button,
  Center,
  Divider,
  Group,
  HoverCard,
  rem,
  SimpleGrid,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link } from "@remix-run/react";
import { IconBrandReact, IconChevronDown } from "@tabler/icons-react";
import MyName from "consts/MyName";
import useLocalStorageColor from "hooks/useLocalStorageColor";
import { lazy, Suspense } from "react";

import { vars } from "../../../theme";
import ColorInput from "../ColorInput/ColorInput";
import ColorSchemeSwitch from "./ColorSchemeSwitch";
import NavLinks from "./NavLinks";
import * as styles from "./styles.css";

const preload = () => {
  return import("./NavDrawer");
};

const NavDrawer = lazy(preload);

const REACT_COLOR = "#149eca";

export default function Nav() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [color] = useLocalStorageColor();

  return (
    <AppShellHeader px={vars.spacing.md}>
      <Group h="100%" justify="space-between" wrap="nowrap">
        <Group gap={8} wrap="nowrap">
          <Link aria-label="Home page icon link" to="/">
            <IconBrandReact
              className={styles.react}
              color={REACT_COLOR}
              size={48}
            />
          </Link>
          <Link className={styles.home} to="/">
            <Text fw="bold">{MyName}</Text>
          </Link>
        </Group>
        <Group gap={0} h="100%" visibleFrom="sm" wrap="nowrap">
          <Link className={styles.link} to="/">
            Home
          </Link>
          <HoverCard position="bottom" radius="md" shadow="md" width={600}>
            <HoverCard.Target>
              <Link className={styles.link} to="/">
                <Center inline>
                  <Box component="span" mr={5}>
                    Features
                  </Box>
                  <IconChevronDown
                    color={color}
                    style={{ height: rem(16), width: rem(16) }}
                  />
                </Center>
              </Link>
            </HoverCard.Target>

            <HoverCard.Dropdown style={{ overflow: "hidden" }}>
              <Group justify="space-between" px="md">
                <Text fw={500}>Features</Text>
                <Anchor c={color} fz="xs" href="#">
                  View all
                </Anchor>
              </Group>

              <Divider my="sm" />

              <SimpleGrid cols={2} spacing={0}>
                <NavLinks />
              </SimpleGrid>

              <div className={styles.dropdownFooter}>
                <Group justify="space-between">
                  <div>
                    <Text fw={500} fz="sm">
                      Get started
                    </Text>
                    <Text c="dimmed" size="xs">
                      Their food sources have decreased, and their numbers
                    </Text>
                  </div>
                  <Button variant="default">Get started</Button>
                </Group>
              </div>
            </HoverCard.Dropdown>
          </HoverCard>
          <Link className={styles.link} to="/">
            Learn
          </Link>
          <Link className={styles.link} to="/">
            Academy
          </Link>
        </Group>

        <Group wrap="nowrap">
          <ColorInput visibleFrom="sm" />
          <ColorSchemeSwitch />
          <Burger
            aria-label="Show navigation drawer"
            hiddenFrom="sm"
            opened={drawerOpened}
            onClick={toggleDrawer}
            onMouseEnter={preload}
          />
        </Group>
      </Group>

      <Suspense fallback={null}>
        <NavDrawer opened={drawerOpened} onClose={closeDrawer} />
      </Suspense>
    </AppShellHeader>
  );
}
