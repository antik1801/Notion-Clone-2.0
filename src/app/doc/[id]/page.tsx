"use client"
import React, { useEffect, useState } from 'react'
import Document from '../../../components/Document';
import LoadingSpinner from '@/components/LoadingSpinner';

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
      return <LoadingSpinner /> ; // Render a fallback while params are being resolved
    }
  return (
    <div className="flex flex-col flex-1 min-h-screen">
        <Document id={params.id} />
    </div>
  )
}

export default DocumentPage
