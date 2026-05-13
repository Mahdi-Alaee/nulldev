import React from 'react'

const Title = ({miniTitle , title , desc}) => {
  return (
    <div className="mb-14 text-center">
    <span
        className="py-1 px-4 bg-rose-100 rounded-full text-xs font-medium text-rose-500 text-center">{miniTitle}</span>
    <h2 className="text-3xl text-center font-semibold text-gray-900 py-5">
        {title}
    </h2>
    <p className="text-lg font-normal text-gray-500 max-w-md md:max-w-2xl mx-auto">
        {desc}
    </p>
</div>  )
}

export default Title