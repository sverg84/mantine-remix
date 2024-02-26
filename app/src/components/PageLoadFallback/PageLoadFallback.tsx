import { Box, Loader } from "@mantine/core";
import * as styles from "./styles.css";

type Props = Readonly<{
  color?: string;
}>;

export default function PageLoadFallback({ color }: Props) {
  return (
    <Box className={styles.box}>
      <Loader size="4rem" color={color ?? "blue"} type="dots" />
    </Box>
  );
}
