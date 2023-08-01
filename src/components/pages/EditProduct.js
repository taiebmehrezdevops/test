import React, {useState} from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Label,
    Input,
  } from "reactstrap";
  import { useDispatch } from "react-redux";
  import { editProduct } from "../../redux/actions/actionsProduct";
  import { useSelector } from 'react-redux';

  const EditProduct = ({data})=>{
    const [modal, setModal] = useState(false);
    const [design,setDesign] = useState(data.design);
    const [desc,setDesc] = useState(data.desc);
    const [prix,setPrix] = useState(data.prix);
    const [qte,setQte] = useState(data.qte);
    const [cat,setCat] = useState(data.cat);
    const toggle = () => {
      setModal(!modal);
    };
    const dispatch = useDispatch();
    const editt=()=>{
      dispatch(editProduct(data._id,{design,desc,prix,qte,cat}))
      setModal(!modal)
    }
    return(
      <div>
      <Button color="danger" onClick={toggle}>
        edit Product{" "}
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>edit modal</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="désignation">désignation</Label>
              <Input
            value={design}
            onChange={(e)=>setDesign(e.target.value)}
                type="text"
                name="design"
                id="design"
                placeholder="with a placeholder"
              />
            </FormGroup>
            <FormGroup>
              <Label for="description">description</Label>
              <Input
         value={desc}
         onChange={(e)=>setDesc(e.target.value)}
                type="text"
                name="desc"
                id="desc"
                placeholder="password placeholder"
              />
            </FormGroup>
            <FormGroup>
              <Label for="prix">prix</Label>
              <Input
              value={prix}
              onChange={(e)=>setPrix(e.target.value)}
                type="text"
                name="prix"
                id="prix"
                placeholder="password placeholder"
              />
            </FormGroup>
            <FormGroup>
              <Label for="qte">Qte</Label>
              <Input
              value={qte}
              onChange={(e)=>setQte(e.target.value)}
                type="text"
                name="qte"
                id="qte"
                placeholder="password placeholder"
              />
            </FormGroup>
            <FormGroup>
              <Label for="cat">catégory</Label>
              <Input
              value={cat}
              onChange={(e)=>setCat(e.target.value)}
                type="text"
                name="cat"
                id="cat"
                placeholder="password placeholder"
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={editt}>
            save
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
export default EditProduct