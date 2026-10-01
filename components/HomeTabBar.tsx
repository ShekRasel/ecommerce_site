import { productType } from '@/constant';
import React from 'react'

interface Props {
    selectedTab : string,
    onTabSelect : (tab : string) => void;
}
function HomeTabBar({selectedTab , onTabSelect} : Props) {
  return (
    <div className='collection-tabs flex w-full min-w-0 font-semibold'>
        <div className='flex w-full items-center gap-2 overflow-x-auto border-b border-[#dfe6dc] pb-4'>
            {productType?.map((item)=>(
              <button key={item?.title} className={`whitespace-nowrap cursor-pointer rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider transition hover:bg-neutral-100 ${selectedTab === item.title && 'bg-neutral-950 text-white hover:bg-neutral-950'}`}
              onClick={()=>onTabSelect(item?.title)}
              aria-pressed={selectedTab === item.title}
              >
                {item?.title}
              </button>
            ))}
        </div>
    </div>
  )
}

export default HomeTabBar
