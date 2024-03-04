import { ColorInput as MantineColorInput } from "@mantine/core";
import useLocalStorageOrLoaderColor from "hooks/useLocalStorageOrLoaderColor";

type Props = Omit<
  React.ComponentProps<typeof MantineColorInput>,
  "value" | "onChange" | "radius"
>;

export default function ColorInput(props: Props) {
  const [color, setColor] = useLocalStorageOrLoaderColor();

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
