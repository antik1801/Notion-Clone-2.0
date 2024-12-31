'use client'
import React,{FormEvent, useEffect, useState, useTransition} from 'react'
import { Input } from './ui/input';
import { Button } from './ui/button';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { useDocumentData } from 'react-firebase-hooks/firestore';

type TDocumentProps = {
    id: string;
}

const Document = ({id}: TDocumentProps) => {
    const [input , setInput] = useState("")
    const [isUpdating , startTransition] = useTransition()
    const firebaseConnection = doc(db, "documents", id);
    const [data, loading, error] = useDocumentData(firebaseConnection)

    useEffect(()=>{
        startTransition(async ()=>{
            setInput(data?.title);
        })
    },[data])

    const updateTitle = (e: FormEvent) =>{
        e.preventDefault();
        if(input.trim())
        {   
            startTransition(async()=>{
                await updateDoc( doc(db , "documents" , id) , {
                    title: input
                });
            })
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
