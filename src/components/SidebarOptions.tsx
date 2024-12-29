import { doc } from 'firebase/firestore';
import React from 'react'
import { useDocumentData } from 'react-firebase-hooks/firestore';
import { db } from '../../firebase';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

type SidebarOptionProps={
    id: string | undefined;
    href: string ;
}

const SidebarOptions = ({id, href}: SidebarOptionProps) => {
    const [ data, loading , error ] = useDocumentData(id?  doc(db, "documents", id) : null);
    const pathName = usePathname();
    const isActive = href && href.includes(pathName) && pathName !="/";
    if(!data) return; 


  return (
    <Link href={href} className={`relative flex items-center px-4 py-2 mb-2 rounded-lg shadow-sm transition-colors scrollbar-hide ${
        isActive
          ? "bg-gray-300 font-bold text-black border border-black"
          : "bg-white text-gray-800 border border-gray-300 hover:bg-gray-100"
      }`}
  >
    <p className='truncate w-full'>{data.title}</p>
  </Link>
  )
}

export default SidebarOptions
