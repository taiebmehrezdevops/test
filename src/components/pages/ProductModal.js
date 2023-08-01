import React,{ useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../../redux/actions/actionsProduct";
import { useSelector } from 'react-redux';
import axios from "axios";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
} from 'reactstrap';
const ProductModal= () =>{
    const [design,setDesign] = useState();
    const [desc,setDesc] = useState();
    const [prix,setPrix] = useState();
    const [qte,setQte] = useState();
    const [cat,setCat] = useState();
    const [image,setImage] = useState();
    const [cancel, setCancel] = useState(false);
    const [modal, setModal] = useState(false);
    const [uploading, setUploading] = useState(false);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user=useSelector((state)=>state.authReducer.user)
    const add=()=>{
        dispatch(addProduct({design,desc,prix,qte,cat,image}))
        setCancel(!cancel)
    }
    const uploadProfileImage = (e) => {
      const file = e.target.files[0];
      const bodyFormData = new FormData();
      bodyFormData.append("image", file);
      setUploading(true);
      axios
        .post("/api/uploads", bodyFormData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          setImage(response.data);
          setUploading(false);
        })
        .catch((err) => {
          console.log(err);
          setUploading(false);
        });
    };
  const toggle = () => {
    setModal(!modal);
  };

    return (
      <>
      {
       cancel?(navigate('/')) : (
        <div style={{ padding: '0 15px' }}>
      <NavLink onClick={toggle} href="#">
      Add Product
      </NavLink>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add Product</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="design">désignation produit</Label>
              <Input
             
                type="text"
                name="design"
                id="design"
                placeholder="with a placeholder" onChange={(e) => setDesign(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="desc">Description produit</Label>
              <Input
               
                type="text"
                name="desc"
                id="desc"
                placeholder="password placeholder" onChange={(e) => setDesc(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="prix">Prix</Label>
              <Input
             
                type="text"
                name="prix"
                id="prix"
                placeholder="password placeholder" onChange={(e) => setPrix(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="qte">Quantité</Label>
              <Input
             
                type="text"
                name="qte"
                id="qte"
                placeholder="password placeholder" onChange={(e) => setQte(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="category">Category produit</Label>
              <Input
             
                type="text"
                name="category"
                id="category"
                placeholder="password placeholder" onChange={(e) => setCat(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
      <>
                  {image ? (
                    <img
                      src={image}
                      width="100%"
                      style={{ margin: "8px 0" }}
                      height="150px"
                      alt="product"
                    />
                  ) : (
                    <div style={{ margin: "8px 0" }}>
                      {!uploading ? "Upload Image For Product" : "Loading ..."}
                    </div>
                  )}
                  <div
                  >
                    Select File
                    <input
                      accept="image/*"
                      type="file"

                      onChange={uploadProfileImage}
                    />
                  </div>
                </>
      </FormGroup>
            <Button onClick={add} >Add Product</Button>
            <Button onClick={() => setCancel(!cancel)}>cancel</Button>
          </Form>
          </ModalBody>
      </Modal>
    </div>
       )
}
</>
    )
}
export default ProductModal;
