import { Accordion, isLightColor, ThemeIcon } from "@mantine/core";
import {
  IconBrandCpp,
  IconBrandCSharp,
  IconBrandGraphql,
  IconBrandMysql,
  IconBrandPhp,
  IconBrandPython,
  IconBrandReact,
  IconBrandTypescript,
} from "@tabler/icons-react";
import BodyCard from "components/BodyCard/BodyCard";
import useLocalStorageColor from "hooks/useLocalStorageColor";

import * as styles from "./styles.css";

const eek = [
  {
    description: `Ramped up on React skills while transitioning from web infra (PHP) to
          UI programming in my full-time position at Meta. Developed an
          expertise in applying Hooks, code-splitting APIs, and React18
          concurrency features to create seamless user experiences while
          optimizing app/page performance. Expanding upon Meta-internal skills
          with public React app building (e.g., this web page!).`,
    icon: IconBrandReact,
    value: "React",
  },
  {
    description: `Self-taught during the summer of 2023 in order to create a modern
          React app at home while still enforcing type safety. Very similar to
          Meta's "Flow" but with broader appeal.`,
    icon: IconBrandTypescript,
    value: "TypeScript",
  },
  {
    description: `First programming language learned while working full-time at Meta.
          Built multiple scalable features by focusing on asynchronous
          programming. Moved to implementing GraphQL queries and mutations on
          the server side in addition to server-calling React routes and their
          corresponding components.`,
    icon: IconBrandPhp,
    value: "Hack",
  },
  {
    description: `Learned back-end GraphQL field implementation skills while learning
          Hack, and gained client-side GraphQL experience in tandem with coding
          in React while full-time at Meta.`,
    icon: IconBrandGraphql,
    value: "GraphQL",
  },
  {
    description: `Database management skills applied during both the internship and
          full-time Meta experiences. MySQL queries created for mass aggregates
          of traffic data in C++/Python, queries and mutations optimized for
          employee directory information in Hack.`,
    icon: IconBrandMysql,
    value: "MySQL",
  },
  {
    description: `First applied in class projects around web development (e.g., Flask,
          Jinja, REST) while at the University of Michigan, later used to create
          data pipeline jobs for traffic aggregation as an intern at Meta.
          Presently, using FastAPI and PostgreSQL for personal projects.`,
    icon: IconBrandPython,
    value: "Python",
  },
  {
    description: `First programming language learned as an undergraduate at the
          University of Michigan. Used for package building and app compression
          while coding as a Meta intern. Skills in asynchronous programming
          (e.g., threads, mutexes, semaphores, etc.) and file system management
          as part of a course on operating systems.`,
    icon: IconBrandCpp,
    value: "C++",
  },
  {
    description: `Onboarded as part of university senior capstone project at Michigan.
          Gained experience in C# in order to create a video game as part of a
          team of four (4) using the Unity game engine.`,
    icon: IconBrandCSharp,
    value: "C#",
  },
];

export default function SkillsCard() {
  const [color] = useLocalStorageColor();
  return (
    <BodyCard id="skills" title="Skills">
      <Accordion defaultValue="Apples" variant="filled">
        {eek.map((item) => (
          <Accordion.Item
            className={styles.item}
            key={item.value}
            value={item.value}
          >
            <Accordion.Control
              icon={
                <ThemeIcon color={color} radius="lg" size={34} variant="filled">
                  <item.icon
                    color={isLightColor(color) ? "black" : "white"}
                    size={22}
                  />
                </ThemeIcon>
              }
            >
              {item.value}
            </Accordion.Control>
            <Accordion.Panel>{item.description}</Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </BodyCard>
  );
}
