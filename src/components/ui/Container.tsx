import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react'

type propTypes={
    children: ReactNode,
    className?: string;
}

const Container = ({children ,className}: propTypes) => {
  return (
    <div className={`${cn("flex max-w-6xl mx-auto justify-between pb-5"), className}`}>
      {children}
    </div>
  )
}

export default Container
