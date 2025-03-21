
import { Product } from '@/sanity.types'
import React from 'react'
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import QuantityButton from './ui/QuantityButton';
import FormatedPrice from './FormatedPrice';

interface Props{
    product : Product;
}

function AddtoCardButton({product}:Props) {
    const isOutStock = product?.stock === 0;
    const itemCount = 2;

  return (
    <div>
        {
            itemCount ? (
                <div className='text-sm'>
                    <div className='flex justify-between items-center'>
                        <h1 >
                            Quantity
                        </h1>
                        <QuantityButton product = {product}/>
                    </div>

                    <div className='flex justify-between mt-3 pt-2 border-t'>
                        <h1>Subtotal</h1>
                        <FormatedPrice amount={product?.price ? ( product?.price * itemCount): 0} className=''/>
                    </div>
                </div>
            ) : (
                <Button disabled={isOutStock} className={cn('w-full bg-white text-black border-darkColor border  hover:bg-black hover:text-white hoverEffect cursor-pointer')}>Add to Cart</Button>
            )
        }
        
    </div>
  )
}

export default AddtoCardButton