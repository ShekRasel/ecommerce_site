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
    <div className='py-5 flex flex-col md:flex-row items-start gap-5'>
        <div className='flex flex-col md:min-w-40 border'>
            
            {categories?.map((item)=>(
                <Button key={item?._id}
                onClick={()=>setCurrentSlug(item?.slug?.current as string)}
                className={`bg-transparent border-0 rounded-none text-darkColor shadow-none hover:bg-black font-semibold hoverEffect hover:text-white border-b last:border-b-0 
                
                ${item?.slug?.current === currentSlug && 'bg-darkColor text-white border-darkColor'}
                
                `}>
                    {item.title}
                </Button>
            ))}
            
             </div>
        <div className='w-full'>
        {loading ? (
        <div className="flex flex-col items-center justify-center py-10 text-center bg-gray-100 rounded-lg w-full mt-10 space-y-4 min-h-80 text-xl font-semibold">
          <div className="flex gap-2 text-blue-600">
            <span>
              <Loader2 className="animate-spin"/>
            </span>
            <span >Product is loading</span>
          </div>
        </div>
      ) : (
        <>
          {products?.length ? (
            <div className="grid md:grid-cols-2  lg:grid-cols-3 w-full items-center justify-center  gap-5 md:gap-8">
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