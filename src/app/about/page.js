import Hero from '@/component/Hero'
import React from 'react'

const getData = async()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  return res.json()

}
const page = async() => {
  const data = await getData()
  return (
    <div>
        <Hero/>
        <h1>Hello Welcome To About Page</h1>
        <h2>{data.title}</h2>
        <p>{data.body}</p>
    </div>
  )
}

export default page