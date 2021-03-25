import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import '@src/prismic/fragments/navigation'
import { navigationResolver } from '@src/utils/dataResolvers'

const Navigation = () => {
  const data = useStaticQuery(graphql`
    {
      prismicNavigation(tags: { in: "main_menu" }) {
        ...navigationFragmentFull
      }
    }
  `)

  const navigation = navigationResolver(data.prismicNavigation)
  console.log(navigation)

  return (
    <nav className='navigation pl-lg-4 pt-lg-3'>
      <Link to='/'>
        <h1 className='mb-2'>Emma Heiðarsdóttir</h1>
      </Link>
      <div className='navigation__menu d-flex'>
        {navigation.links.map((link, i) => (
          <Link
            className='navigation__menu__item'
            activeClassName='navigation__menu__item--active'
            key={i}
            to={link.url}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Navigation
