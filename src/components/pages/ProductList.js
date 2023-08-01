import { useEffect } from "react"
import { useDispatch, useSelector} from "react-redux"
import { getProducts } from "../../redux/actions/actionsProduct"
import ProductCard from "./ProductCard"

const ProductList=()=>{
   const dispatch=useDispatch()
   useEffect(()=>{
    dispatch(getProducts())
},[])
   const products = useSelector ((state)=>state.productReducer.products.product)
   
   return(
    <div className="container">
        <div className="row">
           
        </div>
        { products && products.map((el)=>(
            <ProductCard data={el} />
        ))}
    </div>
   )
}
export default ProductList