const page = async()=>{
    const res = await fetch('https://api.escuelajs.co/api/v1/products?limit=10')
    const product = await res.json()
    return (
        <div>
            <h1>Data Fetching</h1>
            <ul>
                {
                    product.map((e)=>(
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