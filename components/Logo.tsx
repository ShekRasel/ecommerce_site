import { cn } from '@/lib/utils';
import Link from 'next/link'
import React from 'react'

interface Props {
  children : React.ReactNode;
  className : string;
}

function Logo({children, className} : Props) {
  return (
    <Link href={'/'} aria-label="Shynzo home" className = {cn('inline-flex items-center text-xl font-black tracking-[-0.04em] text-neutral-950',className)}>
      <span className="mr-2 inline-block size-2.5 rounded-full bg-amber-600" />{children}
    </Link>
  )
}

export default Logo
