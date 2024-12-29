import { doc } from 'firebase/firestore';
import React from 'react'
import { useDocumentData } from 'react-firebase-hooks/firestore';
import { db } from '../../firebase';

type SidebarOptionProps={
    id: string | undefined;
    href: string | undefined;
}

const SidebarOptions = ({id, href}: SidebarOptionProps) => {
    const [ data, loading , error ] = useDocumentData(id?  doc(db, "documents", id) : null);
  return (
    <div>
      <h1>{id}</h1>
    </div>
  )
}

export default SidebarOptions
