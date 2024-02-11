import type { ReactNode, HTMLAttributes } from 'react'

interface FlexProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
}

export default function Flex({ children, ...props }: FlexProps) {
  return <section {...props}>{children}</section>
}
