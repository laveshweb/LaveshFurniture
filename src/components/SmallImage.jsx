import React from 'react'

const SmallImage = ({src}) => {
  return (
  <div style={{
    backgroundImage : "url(${src})",
backgroundPosition : "cover",
backgroundSize : "cover"
  }} className="w-full h-[450px] saturate-120 lg:h-[380px] bg-zinc-300 center-item text-zinc-600">
    {
        !src && "small Image"
    }
  </div>
  )
}

export default SmallImage