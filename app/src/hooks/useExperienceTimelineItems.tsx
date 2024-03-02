import {
  Text,
  Tooltip,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import type { TablerIconsProps } from "@tabler/icons-react";
import { IconBrandMeta, IconDeviceDesktopAnalytics } from "@tabler/icons-react";
import * as React from "react";

type Badge = Readonly<{
  color: string;
  label: string;
  variant: string;
}>;

export type Item = Readonly<{
  Icon: (props: TablerIconsProps) => React.JSX.Element;
  badge: Badge;
  description: JSX.Element;
  id: string;
  skillsList: Array<string>;
  src: string;
  timeframe: string;
  title: string;
}>;

export default function useExperienceTimelineItems(): ReadonlyArray<Item> {
  const { colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();

  const variant = colorScheme === "light" ? "dot" : "light";

  const metaBadge = {
    color: theme.colors.blue[4],
    label: "Meta Platforms, Inc.",
    variant,
  };
  return [
    {
      Icon: IconBrandMeta,
      badge: metaBadge,
      description: (
        <>
          Full-stack product software engineer (PHP/Hack and JS/React) for the
          Org Effectiveness team within the Enterprise Engineering division.
          Released multiple high-priority stakeholder feature requests
          pertaining to HR-sensitive employee data. Leader of team app
          performance optimization opportunities.
        </>
      ),
      id: "meta_swe",
      skillsList: ["PHP", "React", "GraphQL", "MySQL"],
      src: "/meta.gif",
      timeframe: "2020-2023",
      title: "Software Engineer",
    },

    {
      Icon: IconBrandMeta,
      badge: metaBadge,
      description: (
        <>
          Intern for the Traffic Analytics team within the Infrastructure
          division. Created monitoring tool for team oncall to measure network
          packet failures with interactive web page.
        </>
      ),
      id: "meta_intern",
      skillsList: ["C++", "Python", "Apache Thrift", "MySQL"],
      src: "/meta.gif",
      timeframe: "Summer 2019",
      title: "Software Engineer Intern",
    },
    {
      Icon: IconDeviceDesktopAnalytics,
      badge: {
        color: theme.colors.yellow[4],
        label: "University of Michigan",
        variant,
      },
      description: (
        <>
          Assistant at the university's Transportation Research Institute as
          part of the Undergraduate Research Opportunity Program (UROP).
          Participated in{" "}
          <Tooltip
            label={
              "of or relating to the scientific study of the " +
              "measurements and proportions of the human body"
            }
          >
            <Text component="span">anthropometric</Text>
          </Tooltip>{" "}
          study for Defence Research & Development Canada (DRDC).
        </>
      ),
      id: "umich_urop",
      skillsList: ["MATLAB", "Wolfram Mathematica"],
      src: "/umich.jpeg",
      timeframe: "2016-2017",
      title: "Research Assistant",
    },
  ];
}
