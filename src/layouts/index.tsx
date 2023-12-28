import React from "react"

interface LayoutProps {
  children: React.ReactNode
}

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main id="main">
      <div>Left Navigation</div>
      <div>{children}</div>
    </main>
  )
}

export default MainLayout
