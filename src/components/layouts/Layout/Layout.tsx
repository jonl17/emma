import React from 'react'
import SEO from '@cmp/layouts/SEO'
import Navigation from '@cmp/site/Navigation'
import Footer from '@cmp/site/Footer'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <SEO />
      <div className='layout'>
        <Navigation />
        <div className='page container px-0 pt-2 pt-lg-4'>{children}</div>
        <Footer />
      </div>
    </>
  )
}

export default Layout
