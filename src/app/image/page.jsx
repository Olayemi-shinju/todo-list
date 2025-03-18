import Image from 'next/image'
import React from 'react'
import boruto from  '@/images/boruto.jpg'
import naruto from  '@/images/naruto.jpeg'
import emilia from  '@/images/emilia.jpeg'
import alya from  '@/images/alya.jpeg'
import obito from  '@/images/obito.jpg'

const page = () => {
  return (
    <div>
     <h1>Welcome to image optiomization in next js</h1> 
    <div className='grid grid-cols-3 w-full gap-2 px-2.5'>
    <Image src={boruto} alt='boruto' width={400} height={400}/>
     <Image src={naruto} alt='naruto' width={700} height={700}/>
     <Image src={emilia} alt='emilia' width={800} height={800}/>
     <Image src={alya} alt='alya' width={300} height={300}/>
     <Image src={obito} alt='obito' width={500} height={500}/>
    </div>

    </div>
  )
}

export default page
