import React from 'react'
import SEO from '@cmp/layouts/SEO'
import Navigation from '@cmp/site/Navigation'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <SEO />
      <div className="layout">
        <Navigation />
        <div className="page container pt-lg-4">{children}</div>
      </div>
    </>
  )
}

export default Layout
