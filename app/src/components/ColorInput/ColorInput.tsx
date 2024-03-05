import { ColorInput as MantineColorInput } from "@mantine/core";
import useLocalStorageColor from "hooks/useLocalStorageColor";

type Props = Omit<
  React.ComponentProps<typeof MantineColorInput>,
  "value" | "onChange" | "radius"
>;

export default function ColorInput(props: Props) {
  const [color, setColor] = useLocalStorageColor();

  return (
    <MantineColorInput
      aria-label="Color picker"
      eyeDropperButtonProps={{ "aria-label": "Eye dropper" }}
      radius="lg"
      value={color}
      onChange={setColor}
      {...props}
    />
  );
}
