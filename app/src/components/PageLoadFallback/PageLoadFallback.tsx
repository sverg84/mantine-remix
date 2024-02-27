import { Box, Loader } from "@mantine/core";
import * as styles from "./styles.css";

export default function PageLoadFallback() {
  return (
    <Box className={styles.box}>
      <Loader size="4rem" type="dots" />
    </Box>
  );
}
