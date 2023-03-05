import type { Meta, StoryFn } from "@storybook/react";
import type { FunctionComponent } from "react";
import Link from "~frontend/source/renderer/components/link/link";
import type LinkProperties from "~frontend/source/renderer/components/link/link.types";

export default {
  title: "Link",
  component: Link,
} as Meta<typeof Link>;

const Template: StoryFn<FunctionComponent<LinkProperties>> = ({
  children,
  ...rest
}: LinkProperties): JSX.Element => {
  return <Link {...rest}>{children}</Link>;
};

export const LinkExample: StoryFn<typeof Link> = Template.bind({});

LinkExample.args = {
  children: "Google.com",
  href: "https://google.com",
};

export const InsecureLinkExample: StoryFn<typeof Link> = Template.bind({});

InsecureLinkExample.args = {
  children: "Google.com",
  href: "https://google.com",
  insecure: true,
};
