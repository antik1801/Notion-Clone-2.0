"use client";

import React, { useContext, useEffect, useState } from "react";

import SidebarSheet from "./SidebarSheet";
import MenuOptions from "./MenuOptions";
import { useCollection } from "react-firebase-hooks/firestore";
import { useUser } from "@clerk/nextjs";
import { collectionGroup, query, QueryDocumentSnapshot, where } from "firebase/firestore";
import { db } from "../../firebase";
import { DocumentData } from "firebase-admin/firestore";


export interface TRoomDocument extends DocumentData {
  createAt: string;
  role: "owner" | "editor";
  roomId: string;
  userId: string;
  id?: string;
}

const Sidebar = () => {
  const { user } = useUser();
  
  console.log(user);
  const [groupedData, setGroupedData] = useState<{
    owner: TRoomDocument[];
    editor: TRoomDocument[];
  }>({
    owner: [],
    editor: [],
  });

  const [snapshot , loading , error] = useCollection(
    user &&
      query(
        collectionGroup(db, "rooms"),
        where("userId", "==", user?.emailAddresses[0]?.toString())
      )
  );
  
  useEffect(() => {
      if(loading || !snapshot) return;
      const grouped = snapshot.docs.reduce<{
        owner: TRoomDocument[];
        editor: TRoomDocument[];
      }>(
        (acc, curr: QueryDocumentSnapshot) => {
          const roomData = curr.data() as TRoomDocument;
          if (roomData.role === "owner") {
            acc.owner.push({
              id: curr.id,
              ...roomData,
            });
          } else {
            acc.editor.push({
              id: curr.id,
              ...roomData,
            });
          }

          return acc;
        },
        {
          owner: [],
          editor: [],
        }
      );
      setGroupedData(grouped);
     
  }, [snapshot, loading]);
  // TODO: MAKE a scaleton loading if loading is happening

  return (
    <div className="p-2 md:p-5 bg-gray-200 relative">
      <SidebarSheet />
      <div className="hidden md:inline">
        <MenuOptions groupedData={groupedData}/>
      </div>
    </div>
  );
};

export default Sidebar;
