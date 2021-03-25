import React from 'react'
import { CvBlockInterface } from '@src/utils/dataResolvers'

const CvBlock = ({ title, items }: CvBlockInterface) => {
  return (
    <div className='col-lg-8 offset-lg-2 cv-block'>
      <h1 className='d-none d-lg-block'>{title}</h1>
      <h2 className='d-block d-lg-none'>{title}</h2>
      {items.map((block, i) => (
        <div className='d-flex' key={i}>
          <p className='pr-1'>{block.period}</p>
          <div dangerouslySetInnerHTML={{ __html: block.description.html }} />
        </div>
      ))}
    </div>
  )
}

export default CvBlock
