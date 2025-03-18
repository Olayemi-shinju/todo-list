import React from 'react'

const page = async () => {
    const res = await fetch('https://api.escuelajs.co/api/v1/products?limit=10', {
        cache: 'no-store'
    })
    const product = await res.json()
    return (
        <div>
            <h1>SSR / DYNAMIC PAGE RENDERING</h1>
            <ul>
                {
                    product.map((e) => (
                        <div key={e.id}>
                            <h1>{e.price}</h1>
                            <li>{e.title}</li>
                        </div>
                    ))
                }
            </ul>
        </div>
    )
}

export default page
