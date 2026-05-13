import Link from 'next/link'
import React from 'react'

const BlogCart = ({img , date , slug , title , desc}) => {
    return (
        <article className="  w-full relative overflow-hidden rounded-lg">
            <img
                alt={title}
                src={img}
                className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-20 sm:pt-36 lg:pt-52">
                <div className="p-4 sm:p-6">
                    <time dateTime="2022-10-10" className="block text-xs text-white/90"> {date}</time>

                    <Link href={slug}>
                        <h3 className="mt-0.5 text-lg text-white">{title}</h3>
                    </Link>
                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                     {desc}
                    </p>
                </div>
            </div>
        </article>)
}

export default BlogCart