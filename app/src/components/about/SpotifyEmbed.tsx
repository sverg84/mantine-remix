import { Image, rem, Skeleton } from "@mantine/core";
import { useState } from "react";

import * as styles from "./spotify.css";

const FRAME_HEIGHT = 152;

export default function SpotifyEmbed() {
  const [isLoading, setIsLoading] = useState(true);

  const onLoad = (e: React.SyntheticEvent<HTMLIFrameElement, Event>) => {
    e.preventDefault();
    setIsLoading(false);
  };

  const commonProps = {
    height: FRAME_HEIGHT,
    width: "100%",
  };

  return (
    <>
      <Skeleton
        display={isLoading ? undefined : "none"}
        radius={rem(16)}
        {...commonProps}
      />
      <Image
        allow="encrypted-media;"
        className={isLoading ? styles.loading : styles.spotify}
        component="iframe"
        loading="lazy"
        src="https://open.spotify.com/embed/playlist/37i9dQZF1EVJHK7Q1TBABQ?utm_source=generator"
        title="Spotify playlist"
        onLoad={onLoad}
        {...commonProps}
      />
    </>
  );
}
