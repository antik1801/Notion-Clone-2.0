'use client'

import { SignedIn, SignedOut, SignInButton, UserButton  } from "@clerk/nextjs"

const Header = () => {
    
  return (
    <div className="flex justify-between items-center p-2">
         <h1 className="text-2xl font-bold bg-gradient-to-r from-[#c026d3] to-[#7c3aed] bg-clip-text text-transparent animate-gradient">
        {/* {user?.firstName + `'s`} Space  */}
        Sonny-Notion-AI
     </h1>
        {/* Breadcrums */}
      {/* authentications */}
      <div>
        <SignedOut>
            <SignInButton />
        </SignedOut>
        <SignedIn>
            <UserButton />
        </SignedIn>
      </div>
    </div>
  )
}

export default Header
