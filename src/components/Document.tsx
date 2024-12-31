'use client'
import React,{FormEvent, useState, useTransition} from 'react'
import { Input } from './ui/input';
import { Button } from './ui/button';

type TDocumentProps = {
    id: string;
}

const Document = ({id}: TDocumentProps) => {
    const [input , setInput] = useState("")
    const [isUpdating , startTransition] = useTransition()
    const updateTitle = (e: FormEvent) =>{
        e.preventDefault();
        if(input.trim())
        {   
            
        }
    }
  return (
    <div>
        <form onSubmit={updateTitle}>
            {/* rename the docs */}
            <Input value={input}  onChange={(e)=> setInput(e.target.value)}/>

            <Button disabled={isUpdating} type='submit'>
                {isUpdating ? "Updating..." : "Update"}
            </Button>
            {/* IF */}
            {/* isOwner && Invite user && delete document */}
        </form>
        <div>
            {/* Manage users  */}
            {/* Avators */}
        </div>
      {/* Collaborative editors */}
    </div>
  )
}

export default Document
