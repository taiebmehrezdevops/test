import { useDispatch } from "react-redux"
import { deleteProduct } from "../../redux/actions/actionsProduct"
import { addOrder } from "../../redux/actions/actionsOrder";
import EditProduct from "./EditProduct"
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Cart from "../pages/Cart"
import "../../App.css";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBIcon,
    MDBBtn,
    MDBRipple,
  } from "mdb-react-ui-kit";
const ProductCard=({data})=>{
  const user=useSelector((state)=>state.authReducer.user)
  const order=useSelector((state)=>state.orderReducer.user)
  console.log(user,"user")
   const dispatch = useDispatch();
   const navigate = useNavigate()
   const deletee=()=>{
    dispatch(deleteProduct(data._id))
   }
   const addtocart=()=>{
    navigate(`/cart/${data._id}`)
   }
    return(
 
       
         <MDBContainer fluid className="my-5">
         <MDBRow className="justify-content-center" >
           <MDBCol md="8" lg="6" xl="4">
             <MDBCard style={{ borderRadius: "15px" }}>
               <MDBRipple
                 rippleColor="light"
                 rippleTag="div"
                 className="bg-image rounded hover-overlay"
               >
                 <MDBCardImage
                   src={data.image}
                   fluid
                   className="w-100"
                   style={{
                     borderTopLeftRadius: "15px",
                     borderTopRightRadius: "15px",
                   }}
                 />
                 <a href="#!">
                   <div className="mask"></div>
                 </a>
               </MDBRipple>
               <MDBCardBody className="pb-0">
                 <div className="d-flex justify-content-between">
                   <div>
                     <p>
                       <a href="#!" className="text-dark">
                       {data.design}
                       </a>
                     </p>
                   
                   </div>
                   <div>
                     <div className="d-flex flex-row justify-content-end mt-1 mb-4 text-danger">
                       <MDBIcon fas icon="star" />
                       <MDBIcon fas icon="star" />
                       <MDBIcon fas icon="star" />
                       <MDBIcon fas icon="star" />
                     </div>
                     <p className="small text-muted">Rated 4.0/5</p>
                   </div>
                 </div>
               </MDBCardBody>
               <hr class="my-0" />
               <MDBCardBody className="pb-0">
                 <div className="d-flex justify-content-between">
                   <p>
                     <a href="#!" className="text-dark">
                     {data.prix}
                     </a>
                   </p>
                   <p className="text-dark">#### 8787</p>
                 </div>
                 <p className="small text-muted">VISA Platinum</p>
               </MDBCardBody>
               <hr class="my-0" />
               <MDBCardBody className="pb-0">
                 <div className="d-flex justify-content-between align-items-center pb-2 mb-4">
                 
                   <MDBBtn color="primary" onClick={addtocart}>Buy now</MDBBtn>
                   {user && user.isAdmin && (<>
                   <MDBBtn  color="info"onClick={deletee}>Delete</MDBBtn>
                   <MDBBtn
          ripple={false}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Edit
          <EditProduct data={data} />
        </MDBBtn></>)}
                 </div>
               </MDBCardBody>
             </MDBCard>
           </MDBCol>
         </MDBRow>
       </MDBContainer>
    )
}
export default ProductCard
