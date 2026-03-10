"use client";

import React from 'react'
import { useParams } from 'next/navigation'

const page = () => {

    const params = useParams();

  return (
    <div className=''>page{params.root} - {params.groups} - {params.categories}</div>
  )
}

export default page