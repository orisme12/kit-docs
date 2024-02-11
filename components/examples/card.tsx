import type { ReactNode, HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export default function Card({ children, ...props }: CardProps) {
  return <article {...props}>{children}</article>;
}
