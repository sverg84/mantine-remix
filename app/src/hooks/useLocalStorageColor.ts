import { useLocalStorage } from "@mantine/hooks";

export default function useLocalStorageColor() {
  return useLocalStorage({
    defaultValue: "#00ffff",
    key: "color",
  });
}
