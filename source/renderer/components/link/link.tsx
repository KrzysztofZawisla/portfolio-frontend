import type { FunctionComponent } from "react";
import type LinkProperties from "~frontend/source/renderer/components/link/link.types";
import type { LinkPropertiesExternal } from "~frontend/source/renderer/components/link/link.types";

const Link: FunctionComponent<LinkProperties> = ({
  external,
  children,
  href,
  rel = "noopener noreferrer",
  insecure,
  ...rest
}: LinkProperties): JSX.Element => {
  const fixedRel: string = `${!insecure ? rel : ""}`.trim();
  return (
    <a
      {...(rest as Omit<LinkPropertiesExternal, "rel" | "children">)}
      rel={fixedRel}
      href={href}
    >
      {children}
    </a>
  ); //external ? (

  //) : (
  //  <LinkBase
  //    {...(rest as Omit<LinkPropertiesInternal, "rel" | "to" | "children">)}
  //    rel={fixedRel}
  //    to={href}
  //  >
  //    {children}
  //  </LinkBase>
  //);
};

export default Link;
