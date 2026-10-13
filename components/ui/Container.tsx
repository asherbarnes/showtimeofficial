import type { ElementType, ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
};

/** Max 1280px content width with responsive gutters (DESIGN 7.1). */
export function Container({ children, as: Tag = "div", className = "" }: ContainerProps) {
  return <Tag className={`container-site ${className}`}>{children}</Tag>;
}
