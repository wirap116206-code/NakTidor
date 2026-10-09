import { BedSingle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Logo() {
  return (
    <Link href={"/"} className='flex items-center gap-1 z-50'>
        <BedSingle size={35} className='text-fuchsia-700'/>
        <span className='text-gray-300 text-2xl font-semibold'>NakTidor</span>
    </Link>
  )
}
