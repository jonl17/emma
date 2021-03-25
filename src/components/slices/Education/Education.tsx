import React from 'react'
import { EducationInterface } from '@src/utils/dataResolvers'

const Education = ({ title, items }: EducationInterface) => {
  console.log(title, items)
  return (
    <div className='col-lg-8 offset-lg-2'>
      <h1>{title}</h1>
      {items.map((block, i) => (
        <div className='d-flex' key={i}>
          <p className='pr-1'>{block.period}</p>
          <div dangerouslySetInnerHTML={{ __html: block.description.html }} />
        </div>
      ))}
    </div>
  )
}

export default Education
