import Link from 'next/link'
import React from 'react'

const ProjectCard = ({ img, title, slug ,desc , tag}) => {
    return (  
        <Link href={slug} class="w-full rounded-xl overflow-hidden shadow-lg">
            <img class="w-full" src={img} alt={title} />
            <div class="py-4 px-4">
                <div class="font-semibold text-xl mb-2">{title}</div>
                <p class="text-gray-700 text-base">
                    {desc}
                </p>
            </div>
            <div class="pt-4 pb-2 px-4">               
               {tag.map(item =>  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{item}</span>)}
            </div>
        </Link>

    )
}

export default ProjectCard