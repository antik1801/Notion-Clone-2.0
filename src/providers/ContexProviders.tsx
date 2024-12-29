'use client'
import React, { createContext, ReactNode, useState } from 'react'
interface AuthContextType {
    data: any[]; // Replace 'any' with your specific data type
    setData: React.Dispatch<React.SetStateAction<any[]>>;
  }
  interface ContextProvidersProps {
    children: ReactNode;
  }

export const AuthContext = createContext<AuthContextType | null>(null);
const ContexProviders = ({children}: ContextProvidersProps) => {
    const [data , setData] = useState<any[]>([]);

    const value = {
        data, 
        setData
    }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default ContexProviders
