'use client'
import {ReactNode} from "react"
import LiveblocksProviders from "@/components/LiveblocksProviders"
function PageLayout({children}: {
    children: ReactNode
}){
    return(
        <LiveblocksProviders>
            {children}
        </LiveblocksProviders>
    )
}
export default PageLayout;