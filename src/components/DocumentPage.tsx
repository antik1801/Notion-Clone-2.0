// app/doc/[id]/DocumentPage.tsx
'use client'
import React from 'react'

type DocumentPageProps = {
    id: string
}

const DocumentPage = ({ id }: DocumentPageProps) => {
    console.log({id});
    return (
        <div>
            <h1>Document page: {id}</h1>
        </div>
    )
}

export default DocumentPage