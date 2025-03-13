import { cn } from '@/lib/utils';
import Link from 'next/link'
import React from 'react'

interface Props {
  children : React.ReactNode;
  className : string;
}

function Logo({children, className} : Props) {
  return (
    <Link href={'/'}  className = {cn('text-xl tracking-wider   text-darkColor',className)}>
      {children}
    </Link>
  )
}

export default Logo