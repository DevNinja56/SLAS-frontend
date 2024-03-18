import React from "react"
import Header from "@components/Header"
import Footer from "@components/Footer"

interface LayoutProps {
  children: React.ReactNode
}

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main id="main">
      <Header />
      <div>{children}</div>
      <Footer />
    </main>
  )
}

export default MainLayout
