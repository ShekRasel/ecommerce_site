import { Product } from '@/sanity.types'
import React from 'react'
import { Button } from './button';
import { Minus, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Props{
    product : Product;
}

function QuantityButton({product}: Props) {

    const quantity  = 1 ;
    
  return (
    <div className='flex  justify-center items-center'>
        <Button  variant={'outline'} className={cn('font-base py-0 size-6')}>
            <Minus/>
        </Button>
        <span className=' px-2 font-semibold'>
                {quantity}
        </span>

        <Button variant={'outline'}  className={cn('font-base py-0 size-6')}>
            <Plus/>
        </Button>
    </div>
  )
}

export default QuantityButton