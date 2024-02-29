import { useLocalStorage } from "@mantine/hooks";

import useAppLoaderData from "./useAppLoaderData";

export default function useLocalStorageOrLoaderColor() {
  const { color } = useAppLoaderData();

  return useLocalStorage({
    defaultValue: color,
    key: "color",
  });
}
