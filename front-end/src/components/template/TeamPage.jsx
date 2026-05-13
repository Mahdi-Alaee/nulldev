"use client"

import React, { useState } from 'react'
import Title from '../module/Title'
import Link from 'next/link'
import TeamCard from '../module/TeamCard'

const TeamPage = () => {
    const [members , setMemebers] = useState([
        {name:"آرش لطیفی",job:"برنامه نویس فرانت اند" , desc:"من آرش لطیفی هستم برنامه نویس فرانت اند" ,img:"https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" , github : "https://github.com/ArashDevArt" , telegram : "https://t.me/ArashDevArts"},
        {name:"آرش لطیفی",job:"برنامه نویس فرانت اند" , desc:"من آرش لطیفی هستم برنامه نویس فرانت اند" ,img:"https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" , github : "https://github.com/ArashDevArt" , telegram : "https://t.me/ArashDevArts"},
        {name:"آرش لطیفی",job:"برنامه نویس فرانت اند" , desc:"من آرش لطیفی هستم برنامه نویس فرانت اند" ,img:"https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" , github : "https://github.com/ArashDevArt" , telegram : "https://t.me/ArashDevArts"}
        
    ])
    return (

        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

            <Title miniTitle="تیم ما" title="اعضای تیم" desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."/>



            <div className="grid grid-cols-1 sm:grid-cols-2  gap-6">
                {members.map(member => <TeamCard {...member}/>)}
                <Link href="" className="col-span-full lg:col-span-1 group flex flex-col justify-center text-center rounded-xl p-4 md:p-6 border border-dashed border-gray-200 hover:shadow-sm focus:outline-none focus:shadow-sm" >
                    <h3 className="text-lg text-gray-800">
                       ما اینجا هستیم
                    </h3>
                    <div>
                        <span className="inline-flex items-center gap-x-2 text-rose-600 group-hover:text-rose-700 group-focus:text-rose-700">
                           نمایش موقعیت های شغلی
                            <svg className="shrink-0 size-4 rotate-180" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                        </span>
                    </div>
                </Link>

            </div>

        </div>

    )
}

export default TeamPage