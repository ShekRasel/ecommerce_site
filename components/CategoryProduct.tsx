'use client'
import { CATEGORIES_QUERYResult, Product } from '@/sanity.types'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button';
import { client } from '@/sanity/lib/client';
import { Loader2 } from 'lucide-react';
import ProductCard from './ProductCard';
import NoProduct from './NoProduct';

interface Props {
    categories : CATEGORIES_QUERYResult | undefined;
    slug : string
}

const CategoryProduct = ({categories,slug} : Props) => {
    const [currentSlug , setCurrentSlug] = useState(slug);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] =  useState(false);

    const fetchProducts = async(categorySlug : string)=>{
        try{

            setLoading(true);

            const query = `*[_type == 'product' && references(*[_type == 'category' && slug.current == $categorySlug]._id)] | order(name asc)`;

            const data = await client.fetch(query, {categorySlug});
           setProducts(data);

        }catch(error){
            console.error('Error fetching Products ', error);
        }finally{
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchProducts(currentSlug)
    },[currentSlug])
  return (
    <div className='flex flex-col items-start gap-8 py-8 md:flex-row'>
        <div className='flex w-full gap-2 overflow-x-auto md:w-auto md:min-w-48 md:flex-col'>
            
            {categories?.map((item)=>(
                <Button key={item?._id}
                onClick={()=>setCurrentSlug(item?.slug?.current as string)}
                className={`h-11 shrink-0 rounded-full border border-black/10 bg-white px-5 text-neutral-700 shadow-none hover:bg-neutral-950 font-semibold hover:text-white md:justify-start
                
                ${item?.slug?.current === currentSlug && 'border-neutral-950 bg-neutral-950 text-white'}
                
                `}>
                    {item.title}
                </Button>
            ))}
            
             </div>
        <div className='w-full'>
        {loading ? (
        <div className="surface flex min-h-80 w-full flex-col items-center justify-center space-y-4 py-10 text-center">
          <div className="flex gap-2 text-sm font-semibold text-amber-700">
            <span>
              <Loader2 className="animate-spin"/>
            </span>
            <span>Curating products...</span>
          </div>
        </div>
      ) : (
        <>
          {products?.length ? (
            <div className="grid w-full grid-cols-2 items-stretch gap-3 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
                {products?.map((product: Product) => (
              <div key={product?._id} className="">
                <ProductCard product={product} />
              </div>
            ))}
            </div>
          ) : (
            <NoProduct selectedTab= {currentSlug}/>
          )}
        </>
      )}
        </div>
    </div>
  )
}

export default CategoryProduct
