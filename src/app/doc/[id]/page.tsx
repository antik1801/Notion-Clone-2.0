"use client"
import React, { useEffect, useState } from 'react'

type TProps = {id: string}

const DocumentPage =( props: { params: Promise<TProps> })=>{
  const [params, setParams] = useState<TProps | null>(null);

    useEffect(() => {
        // Unwrap the promise and update state
        props.params.then((resolvedParams) => {
            setParams(resolvedParams);
        });
    }, [props.params]);
    if (!params) {
      return <div>Loading...</div>; // Render a fallback while params are being resolved
  }
  return (
    <div>
        <h1>This is a document page</h1>
    </div>
  )
}

export default DocumentPage
