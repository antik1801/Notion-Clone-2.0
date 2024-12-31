'use client'
import { useMyPresence, useOthers } from '@liveblocks/react'
import React, { ReactNode } from 'react'
import FollowPointer from './FollowPointer'


const LiveCursorProvider = ({children} : { 
    children: ReactNode
}) => {
    const [ myPresence , updateMyPresence ] = useMyPresence()
    const others = useOthers();
    const handlePointerMove = ( e: React.PointerEvent<HTMLDivElement> ) =>{
        const cursor = {
            x : Math.floor(e.pageX),
            y : Math.floor(e.pageY)
        }
        updateMyPresence({cursor})
    }
    const handlePointerLeave = (e: React.PointerEvent<HTMLDivElement>) =>{
        updateMyPresence({cursor: null})
    }
  return (
    <div onPointerMove={handlePointerMove} onPointerLeave={handlePointerLeave}>
        {others.filter(other => other.presence.cursor != null).map(({connectionId, presence , info})=>  
        <FollowPointer key={connectionId} x={presence?.cursor?.x} y={presence?.cursor?.y} info={info}/>
        )}
      {children}
    </div>
  )
}

export default LiveCursorProvider
