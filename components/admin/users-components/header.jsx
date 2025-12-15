"use client"
import { FaBars } from "react-icons/fa6";
const Header = () => {
  return (
    <div className='flex justify-between bg-black rounded-lg px-8 py-3 '>
        <div>
            <  FaBars  />
        </div>
        <div className='flex items-center gap-x-2'>
            <img src='ade.jpg'   className='rounded-full object-fit w-[32px] h-[32px]'/>
            <p className='text-white text-sm font-semibold'>Admin</p>
        </div>
    </div>
  )
}

export default Header