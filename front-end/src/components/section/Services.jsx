"use client"
import React, { useState } from 'react'
import Title from '../module/Title'

import ServicesCard from '../module/ServicesCard'

import { TfiHtml5 } from "react-icons/tfi";

const Services = () => {
    const [services, setServices] = useState([
        { color: "indigo", title: "شخصی سازی آسان", desc: "تیم نال در کنار شماست و تغیرات تخصصی خود را به ما بسپارید", icon: <TfiHtml5 size={25} /> },
        { color: "indigo", title: "شخصی سازی آسان", desc: "تیم نال در کنار شماست و تغیرات تخصصی خود را به ما بسپارید", icon: <TfiHtml5 size={25} /> },
        { color: "indigo", title: "شخصی سازی آسان", desc: "تیم نال در کنار شماست و تغیرات تخصصی خود را به ما بسپارید", icon: <TfiHtml5 size={25} /> },
        { color: "indigo", title: "شخصی سازی آسان", desc: "تیم نال در کنار شماست و تغیرات تخصصی خود را به ما بسپارید", icon: <TfiHtml5 size={25} /> },
    ])
    return (
        <section className="py-20">
            <div className="mx-auto">
                <Title miniTitle=" خدمات" title="خدمات تیم نال" desc=" لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است." />
                <div
                    className="grid lg:grid-cols-4 justify-center items-center gap-x-5 gap-y-8 lg:gap-y-0  md:grid-cols-2 lg:justify-between lg:gap-x-8">
                    {services.map(item => <ServicesCard {...item}/>)}

                </div>
            </div>
        </section>
    )
}

export default Services