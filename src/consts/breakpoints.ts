export const BREAKPOINTS = {
  tablet: 768,
  desktop: 1024
} as const

export type Breakpoint = 'base' | keyof typeof BREAKPOINTS
