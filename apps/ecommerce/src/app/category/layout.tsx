import React, { ReactNode } from 'react'

const layout = ({children} : {children : ReactNode}) => {
  return (
    <div className='w-screen min:h-screen flex justify-center items-center bg-red-400'>{children}</div>
  )
}

export default layout