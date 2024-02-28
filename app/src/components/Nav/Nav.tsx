import {
  Anchor,
  AppShellHeader,
  Box,
  Burger,
  Button,
  Center,
  Collapse,
  Divider,
  Drawer,
  Group,
  HoverCard,
  rem,
  SimpleGrid,
  Text,
  ThemeIcon,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link } from "@remix-run/react";
import {
  IconBook,
  IconBrandReact,
  IconChartPie3,
  IconChevronDown,
  IconCode,
  IconCoin,
  IconFingerprint,
  IconNotification,
} from "@tabler/icons-react";
import MyName from "consts/MyName";

import ColorInput from "../ColorInput/ColorInput";
import ColorSchemeSwitch from "./ColorSchemeSwitch";
import * as styles from "./styles.css";

const mockdata = [
  {
    description: "This Pokémon’s cry is very loud and distracting",
    icon: IconCode,
    title: "Open source",
  },
  {
    description: "The fluid of Smeargle’s tail secretions changes",
    icon: IconCoin,
    title: "Free for everyone",
  },
  {
    description: "Yanma is capable of seeing 360 degrees without",
    icon: IconBook,
    title: "Documentation",
  },
  {
    description: "The shell’s rounded shape and the grooves on its.",
    icon: IconFingerprint,
    title: "Security",
  },
  {
    description: "This Pokémon uses its flying ability to quickly chase",
    icon: IconChartPie3,
    title: "Analytics",
  },
  {
    description: "Combusken battles with the intensely hot flames it spews",
    icon: IconNotification,
    title: "Notifications",
  },
];

const REACT_COLOR = "#149eca";

export default function Nav() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  const links = mockdata.map((item) => (
    <UnstyledButton className={styles.subLink} key={item.title}>
      <Group align="flex-start" wrap="nowrap">
        <ThemeIcon radius="md" size={34} variant="default">
          <item.icon
            color={theme.colors.blue[6]}
            style={{ height: rem(22), width: rem(22) }}
          />
        </ThemeIcon>
        <div>
          <Text fw={500} size="sm">
            {item.title}
          </Text>
          <Text c="dimmed" size="xs">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <AppShellHeader px="var(--mantine-spacing-md)">
      <Group h="100%" justify="space-between" wrap="nowrap">
        <Group gap={8} wrap="nowrap">
          <IconBrandReact color={REACT_COLOR} size={48} />
          <Text fw="bold">{MyName}</Text>
        </Group>
        <Group gap={0} h="100%" visibleFrom="sm" wrap="nowrap">
          <Link className={styles.link} to="/">
            Home
          </Link>
          <HoverCard
            position="bottom"
            radius="md"
            shadow="md"
            width={600}
            withinPortal
          >
            <HoverCard.Target>
              <Link className={styles.link} to="/">
                <Center inline>
                  <Box component="span" mr={5}>
                    Features
                  </Box>
                  <IconChevronDown
                    color={theme.colors.blue[6]}
                    style={{ height: rem(16), width: rem(16) }}
                  />
                </Center>
              </Link>
            </HoverCard.Target>

            <HoverCard.Dropdown style={{ overflow: "hidden" }}>
              <Group justify="space-between" px="md">
                <Text fw={500}>Features</Text>
                <Anchor fz="xs" href="#">
                  View all
                </Anchor>
              </Group>

              <Divider my="sm" />

              <SimpleGrid cols={2} spacing={0}>
                {links}
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
            hiddenFrom="sm"
            opened={drawerOpened}
            onClick={toggleDrawer}
          />
        </Group>
      </Group>

      <Drawer
        hiddenFrom="sm"
        opened={drawerOpened}
        padding="md"
        size="50%"
        title={MyName}
        zIndex={1000000}
        onClose={closeDrawer}
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
              color={theme.colors.blue[6]}
              style={{ height: rem(16), width: rem(16) }}
            />
          </Center>
        </UnstyledButton>
        <Collapse in={linksOpened}>{links}</Collapse>
        <Link className={styles.link} to="/">
          Learn
        </Link>
        <Link className={styles.link} to="/">
          Academy
        </Link>

        <Divider mb="sm" />

        <ColorInput popoverProps={{ zIndex: 1000000 }} />
      </Drawer>
    </AppShellHeader>
  );
}
