import React from 'react'

const Footer = () => {
  const d = new Date()
  return (
    <div className='footer px-2 px-lg-3 d-flex justify-content-end align-items-center'>
      <p>© Emma Heiðarsdóttir | {d.getFullYear()}</p>
    </div>
  )
}

export default Footer
