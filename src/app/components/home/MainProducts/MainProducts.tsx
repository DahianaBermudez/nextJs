const getProducts = async () =>{
    const response = await fetch(`https://${process.env.SHOPIFY_HOSTNAME}/admin/api/2024-01/products.json` ,{
        headers: new Headers ({
            'X-Shopify-Access-Token': process.env.SHOPIFY_API_KEY as string,
        })
    })
    const data = await response.json()
    return data
}
export const MainProducts = async () => {
    const products = await getProducts()
    console.log(products)
    return(
        <h1>Main Products aquiiii</h1>
    )
}