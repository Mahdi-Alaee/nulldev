import React from 'react'

const ServicesCard = ({icon , color , title , desc}) => {
  return (
    <div className="relative w-full text-center   group ">
    <div className={`bg-indigo-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-${color}-600`}>
        {icon}
    </div>
    <h4 className="text-lg font-medium text-gray-900 mb-3 capitalize">
        {title}
    </h4>
    <p className="text-sm font-normal text-gray-500">
        {desc}
    </p>
</div>  )
}

export default ServicesCard