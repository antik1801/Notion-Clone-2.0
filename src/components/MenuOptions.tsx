import { AuthContext } from "@/providers/ContexProviders";
import NewDocumentButton from "./NewDocumentButton";
import React, { useContext } from 'react'
import { TRoomDocument } from "./Sidebar";
import SidebarOptions from "./SidebarOptions";

type menuOptionsProps = {
  groupedData: {
    owner: TRoomDocument[],
    editor: TRoomDocument[]
  }
}

const MenuOptions = ({groupedData}: menuOptionsProps ) => {
  console.log(groupedData)
  return (
    <>
    <NewDocumentButton />
    {/* My Documents */}
    {/* Document lists ... */}
    {groupedData.owner.length === 0 ? (
        <h2 className="text-gray-700 font-bold text-sm">No Document found</h2>
      )
      : 
      (
        <>
        <h2 className="text-gray-700 font-bold text-sm">My Documents</h2>
        {
          groupedData.owner.map(doc => (
            <SidebarOptions key={doc.id} id={doc.id} href={`/doc/${doc.id}`}/>
          ))
        }
        </>
      )
 }

    {/* Shared with me */}
    {/* Shared with me lists ... */}
    {
     groupedData.editor.length === 0 ? (
      <h2 className="text-gray-700 font-bold text-sm">No Shared Document</h2>
    ) :
      (
        <>
          <h2 className="text-gray-700 font-bold text-sm">Shared with me</h2>
        {
          groupedData.owner.map(doc => (
            <SidebarOptions key={doc.id} id={doc.id} href={`/doc/${doc.id}`}/>
          ))
        }
        </>
      )
    }
    </>
  )
}

export default MenuOptions
