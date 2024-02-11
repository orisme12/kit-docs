import withNextra from 'nextra'

const nextConfig = withNextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  defaultShowCopyCode: true,
})

export default nextConfig
