import React from 'react'
import { Button } from './ui/button';
import { Minus, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import useCartStore from '@/store';
import { Product } from '@/sanity.types';
import toast from 'react-hot-toast';

interface Props {
  product  : Product;
  className? : string;
}


function QuantityButton({product,}:Props) {

  const {addItem,getItemCount,removeItem} =  useCartStore();
  const itemCount = getItemCount(product?._id);
  const isOutStock = product?.stock === 0;

  const handleRemoveProduct = ()=>{
    removeItem(product?._id);
    if(itemCount > 1){

      toast.success('Quantity discrease successfully');
    }else{
      toast.success(`${product?.name?.substring(0,12)} removed sussessfuly`)
    }
  };

    
  return (
    <div className='flex  justify-center items-center'>
        <Button 
          onClick={handleRemoveProduct}
          disabled={itemCount === 0 || isOutStock}
        variant={'outline'} className={cn('font-base py-0 size-6 cursor-pointer')}>
            <Minus/>
        </Button>
        <span className=' px-2 font-semibold'>
                {itemCount}
        </span>

        <Button
        onClick={() => {
          addItem(product);
          toast.success(
            `${product?.name?.substring(0, 12)}... added successfully!`
          );
        }}
        variant={'outline'}  className={cn('font-base py-0 size-6 cursor-pointer')}>
            <Plus/>
        </Button>
    </div>
  )
}

export default QuantityButton