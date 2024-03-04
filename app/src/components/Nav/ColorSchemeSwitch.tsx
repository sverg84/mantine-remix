import {
  rem,
  Switch,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { IconMoonStars, IconSun } from "@tabler/icons-react";
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

  const iconProps = {
    stroke: 2.5,
    style: { height: rem(16), width: rem(16) },
  };

  return (
    <Switch
      aria-label="Toggle color scheme"
      checked={checked}
      color="dark.4"
      offLabel={<IconMoonStars color={theme.colors.blue[6]} {...iconProps} />}
      size="md"
      onChange={onChange}
      onLabel={<IconSun color={theme.colors.yellow[4]} {...iconProps} />}
    />
  );
}
