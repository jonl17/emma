import React from 'react'

type Props = { html: string }

const Text = ({ html }: Props) => {
  return (
    <div
      className='text col-lg-8 offset-lg-2'
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

export default Text
