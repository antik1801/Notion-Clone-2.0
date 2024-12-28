'use client'
import React, { useTransition } from 'react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation';
import { createNewDocument } from '../../actions/action';

const NewDocumentButton = () => {
  const [ isPending, startTransition ] = useTransition();
  const router = useRouter();
  const handleCreateNewDocument = () =>{
    startTransition(async ()=>{
      const result = await createNewDocument();
      if(result)
      {
        const {docId} = result;
        router.push(`/doc/${docId}`);
      }
      else
      {
        // Toast --> Soner from shadcn
        // message ("Please sign in to create a new document / try again later...")
        console.error("Document creation failed");

      }
    })
  }

  return (
    <Button onClick={handleCreateNewDocument} disabled={isPending}>{isPending ? "Creating..." : "New Document"}</Button>
  )
}

export default NewDocumentButton
