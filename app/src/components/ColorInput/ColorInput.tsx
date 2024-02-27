import useLocalStorageOrLoaderColor from "hooks/useLocalStorageOrLoaderColor";
import { ColorInput as MantineColorInput } from "@mantine/core";

type Props = Omit<
  React.ComponentProps<typeof MantineColorInput>,
  "value" | "onChange" | "radius"
>;

export default function ColorInput(props: Props) {
  const [color, setColor] = useLocalStorageOrLoaderColor();

  return (
    <MantineColorInput
      aria-label="Color picker"
      radius="lg"
      value={color}
      onChange={setColor}
      {...props}
    />
  );
}
