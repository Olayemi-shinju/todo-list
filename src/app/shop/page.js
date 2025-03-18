"use client"
import React, { useState } from 'react'

const page = () => {
  const [name, setName] = useState('John Wick')
  return (
    <div>
        <h1>Hello Welcome To Shop Page</h1>
        <h1>{name}</h1>
    </div>
  )
}

export default page