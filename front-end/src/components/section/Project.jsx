"use client"

import React, { useState } from 'react'
import Title from '../module/Title'
import ProjectCard from '../module/ProjectCard'

const Project = () => {
    const [projects, setProjects] = useState([
       {img : "https://arashdevarts.vercel.app/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FXVljoYiRrSVyeFuLoM2P&w=640&q=75" , title : "پروژه مدیریت مشتری" , slug : "test" , desc :"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است." , tag : ["tailwind" , "react" , "axios"]},

       {img : "https://arashdevarts.vercel.app/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FXVljoYiRrSVyeFuLoM2P&w=640&q=75" , title : "پروژه مدیریت مشتری" , slug : "test" , desc :"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است." , tag : ["tailwind" , "react" , "axios"]},
       
       {img : "https://arashdevarts.vercel.app/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FXVljoYiRrSVyeFuLoM2P&w=640&q=75" , title : "پروژه مدیریت مشتری" , slug : "test" , desc :"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است." , tag : ["tailwind" , "react" , "axios"]},
              {img : "https://arashdevarts.vercel.app/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FXVljoYiRrSVyeFuLoM2P&w=640&q=75" , title : "پروژه مدیریت مشتری" , slug : "test" , desc :"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است." , tag : ["tailwind" , "react" , "axios"]},
                     {img : "https://arashdevarts.vercel.app/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FXVljoYiRrSVyeFuLoM2P&w=640&q=75" , title : "پروژه مدیریت مشتری" , slug : "test" , desc :"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است." , tag : ["tailwind" , "react" , "axios"]},
                            {img : "https://arashdevarts.vercel.app/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FXVljoYiRrSVyeFuLoM2P&w=640&q=75" , title : "پروژه مدیریت مشتری" , slug : "test" , desc :"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است." , tag : ["tailwind" , "react" , "axios"]},
                            
                                   {img : "https://arashdevarts.vercel.app/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FXVljoYiRrSVyeFuLoM2P&w=640&q=75" , title : "پروژه مدیریت مشتری" , slug : "test" , desc :"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است." , tag : ["tailwind" , "react" , "axios"]},


     
    ])
    return (
        <section className="py-20 relative">
            <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(80%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#fb7185] to-[#f9a8d4] opacity-30 sm:left-[calc(80%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
            <div className="mx-auto">            
                <Title miniTitle="پروژه ها" title="پروژه های تیم" desc=" لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."/>
                <div
                    className=" justify-center items-center gap-x-5 gap-y-8 lg:gap-y-0 grid lg:grid-cols-3 md:grid-cols-2 lg:justify-between lg:gap-x-8">                   {projects.map(project => <ProjectCard {...project}/> )}               
                </div>
            </div>
        </section>
    )
}

export default Project
