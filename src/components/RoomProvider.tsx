import React, {ReactNode} from 'react';
import {
 RoomProvider as RoomProviderWrapper,
 ClientSideSuspense,
} from "@liveblocks/react/suspense";
import LoadingSpinner from './LoadingSpinner';
import LiveCursorProvider from './LiveCursorProvider';
function RoomProvider({roomId, children}: {
    roomId: string,
    children: ReactNode
})
{
    return(
        <RoomProviderWrapper id={roomId} 
        initialPresence={{cursor: null}}>
            <ClientSideSuspense fallback={ <LoadingSpinner /> }>
            <LiveCursorProvider>
            {children}
            </LiveCursorProvider>
            </ClientSideSuspense>
        </RoomProviderWrapper>
    )
}

export default RoomProvider;