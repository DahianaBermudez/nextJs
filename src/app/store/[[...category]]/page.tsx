interface categoryProps{
    params: {
        category:string
    }
}
export default function Category(props : categoryProps){
    const { category } = props.params
    return(
        <h1>category: {category}</h1>
    )
}