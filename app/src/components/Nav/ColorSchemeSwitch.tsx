import {
  Switch,
  useMantineTheme,
  rem,
  useMantineColorScheme,
} from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react";
import { useState } from "react";

export default function ColorSchemeSwitch() {
  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme({
    keepTransitions: true,
  });

  const [checked, setChecked] = useState<boolean>(colorScheme === "dark");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.currentTarget.checked);
    toggleColorScheme();
  };

  const sunIcon = (
    <IconSun
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
      color={theme.colors.yellow[4]}
    />
  );

  const moonIcon = (
    <IconMoonStars
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
      color={theme.colors.blue[6]}
    />
  );

  return (
    <Switch
      checked={checked}
      size="md"
      color="dark.4"
      onLabel={sunIcon}
      offLabel={moonIcon}
      onChange={onChange}
    />
  );
}
