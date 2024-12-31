'use client'
import {ReactNode} from "react"
function PageLayout({children}: {
    children: ReactNode
}){
    return(
        <div>
            {children}
        </div>
    )
}
export default PageLayout;