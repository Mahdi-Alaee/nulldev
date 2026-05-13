import Link from 'next/link'
import React from 'react'

const Baner = () => {
    return (
        <div class="flex flex-col items-center justify-between w-full p-5 text-white bg-rose-500 rounded-xl lg:flex-row gap-y-5"><div class="flex flex-col items-center justify-center gap-2 lg:items-start"><span class="text-xl font-bold text-white lg:text-3xl">با مشـــاوران مـــا در ارتبـــاط باشیــــد...
</span><span class="text-sm text-SrGrey">مشاوران تیم ما همواره در دسترس شما هستند، از راهنمایی در انتخاب بهترین راهکارها تا ارائه پشتیبانی فنی.

</span></div><Link href="" class="flex items-center gap-2 w-40 py-3 justify-center bg-white duration-150 text-rose-500 hover:scale-95 rounded-md bg-PrLavender">ارتباط با کارشناسان<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"></path></svg></Link></div>)
}

export default Baner