import { productType } from '@/constant';
import { Repeat } from 'lucide-react';
import React from 'react'

interface Props {
    selectedTab : string,
    onTabSelect : (tab : string) => void;
}
function HomeTabBar({selectedTab , onTabSelect} : Props) {
  return (
    <div className='flex gap-1.5 font-semibold justify-center items-center'>
        <div className='gap-1.5 grid grid-cols-4 md:grid-cols-5 justify-center items-center'>
            {productType?.map((item)=>(
              <button key={item?.title} className={`border font-sans border-gray-300 cursor-pointer text-sm md:text-base px-4 py-1.5 rounded-full hover:bg-black hover:text-white hoverEffect ${selectedTab === item.title && 'bg-black text-white'}`}
              onClick={()=>onTabSelect(item?.title)}
              >
                {item?.title}
              </button>
            ))}
        </div>
        <button className='border hidden md:block border-darkColor p-2 rounded-full hover:bg-black hover:text-white hoverEffect'>
            <Repeat className='w-5 h-5'/>
        </button>
    </div>
  )
}

export default HomeTabBar