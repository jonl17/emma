import React from 'react'
import { graphql } from 'gatsby'
import SliceMachine from '@cmp/slices/SliceMachine'
import { pageResolver } from '@src/utils/dataResolvers'

interface Props {
  data: any
}

const Page = ({ data }: Props) => {
  const page = pageResolver(data.prismicPage)
  return (
    <div>
      {page.data.body.map((node, i) => (
        <SliceMachine key={i} slice={node} />
      ))}
    </div>
  )
}

export default Page

export const query = graphql`
  query($id: String) {
    prismicPage(id: { eq: $id }) {
      ...pageFragmentFull
    }
  }
`
