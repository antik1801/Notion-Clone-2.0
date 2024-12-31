'use client'

import React,{ReactNode} from 'react'
import {
    LiveblocksProvider,
    RoomProvider,
  } from "@liveblocks/react/suspense";

function LiveblocksProviders({children}: {
    children: ReactNode;
}){
    if(!process.env.NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY)
    {
        throw new Error("Next Liveblocks Public Key Needed");
    }
    return(
        <LiveblocksProvider throttle={16} authEndpoint={"/auth-endpoint"}>
            { children }
        </LiveblocksProvider>
    )
}

export default LiveblocksProviders;