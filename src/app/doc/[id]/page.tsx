'use client'
import React from 'react'

type DocumentPageProps = {
    params :{
        id: string
    }
}

const DocumentPage = ({params: {id}}: DocumentPageProps) => {
    console.log({id});
  return (
    <div>
      <h1>Document page: {id}</h1>
    </div>
  )
}

export default DocumentPage
