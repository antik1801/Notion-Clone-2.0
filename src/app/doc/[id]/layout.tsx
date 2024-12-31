import React, { ReactNode } from 'react';
import { auth } from "@clerk/nextjs/server";

type TDocLayoutProps = {
    children: ReactNode;
    params: Promise<{id: string}>;
}

async function DocLayout({children, params}: TDocLayoutProps){
    auth.protect();
    const {id} = await params;
    console.log({id}, "From /doc/[id]/layout.tsx");
    return(
        <div>
            {children}
        </div>
    )
}

export default DocLayout;