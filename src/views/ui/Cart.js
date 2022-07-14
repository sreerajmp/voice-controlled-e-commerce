import React, { useContext,useEffect,useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { GlobalContext } from "../../state/global/GlobalContextProvider";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Button,
  Table,
  CardFooter,
  Alert
} from "reactstrap";
import Blog from "../../components/dashboard/Blog";
const msg = new SpeechSynthesisUtterance()

const Cart = () => {
  const location = useLocation();
  let navigate = useNavigate();
  const globalCtx = useContext(GlobalContext);
  const [visible, setVisible] = useState(false);

  const speechHandler = (value) => {
      console.log("cart Item spk");
      msg.text = value
    window.speechSynthesis.speak(msg)
  }
 useEffect(()=>{
  speechHandler("Listing products in your cart")
let tempRead=[]
  globalCtx.globalState.allData.map((item,index)=>{
    if (item.cart){
      // console.log("cart Item");
      tempRead.push("Item is "+item.title+" and its cost is Rupees "+item.finalPrice)
    }
  })
  console.log("cart Item",tempRead.toString());
  window.setInterval(speechHandler(tempRead.toString()),2000)
  
 },[location.key])

 

 useEffect(()=>{
  if(globalCtx.globalState.cancelBuy && location.pathname=='/Cart'){
    navigate('/SearchResultPage')
    globalCtx.globalDispatch({type:'CANCEL'})}
},[globalCtx.globalState.cancelBuy])
useEffect(()=>{
  if(globalCtx.globalState.confirmBuy && location.pathname=='/Cart'){
    globalCtx.globalDispatch({ type: "CLEARCART" });setVisible(true)
    globalCtx.globalDispatch({type:'CONFIRM'})
  }
},[globalCtx.globalState.confirmBuy])
  const onDismiss = () => {
    setVisible(false);
  };

  return (
    <div>
      {/* --------------------------------------------------------------------------------*/}
      {/* Card-1*/}
      {/* --------------------------------------------------------------------------------*/}
      <Card>
        <CardTitle tag="h6" className="border-bottom p-3 mb-0">
          <i className="bi bi-cart-fill"> </i>
          Cart
          <h1>{" "}</h1>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Products you chose to buy
          </CardSubtitle>
        </CardTitle>
        
        <CardBody className="">
        <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Item</th>
                {/* <th>Tag</th> */}

                <th>Cost</th>
                <th>Discount</th>
                <th>LetsBuy Price</th>
              </tr>
            </thead>
            <tbody>
              {globalCtx.globalState.allData.map((tdata, index) => (
                <>
                {tdata.cart?<tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <img
                        src={tdata.image}
                        className="rounded-circle"
                        alt="avatar"
                        width="45"
                        height="45"
                      />
                      <div className="ms-3">
                        <h6 className="mb-0">{tdata.title}</h6>
                        <span className="text-muted">{tdata.tag}</span>
                      </div>
                    </div>
                  </td>
                  {/* <td>{tdata.tag}</td> */}
                  <td>{tdata.cost}</td>
                  {/* <td>
                    {tdata.status === "pending" ? (
                      <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>
                    ) : tdata.status === "holt" ? (
                      <span className="p-2 bg-warning rounded-circle d-inline-block ms-3"></span>
                    ) : (
                      <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
                    )}
                  </td> */}
                  <td>{tdata.discount}</td>
                  <td>{tdata.finalPrice}</td>
                </tr>:null}
                </>
              ))}
            </tbody>
          </Table>
        </CardBody>

        <CardFooter>
          <Button color={"success"} onClick={()=>{globalCtx.globalDispatch({ type: "CLEARCART" });setVisible(true)}}>Confirm Buy</Button>
          {" "}
          <Button color={"warning"} onClick={()=>navigate('/SearchResultPage')} >Cancel Buy</Button>
        </CardFooter>
      </Card>
      

      {/* --------------------------------------------------------------------------------*/}
      {/* End Inner Div*/}
      {/* --------------------------------------------------------------------------------*/}
      <div>
            <Alert color="success" isOpen={visible} toggle={onDismiss.bind(null)}>
              <h4 className="alert-heading">Well done! Delivery On the Way</h4>
              <p>
                Aww yeah, you successfully purchased your item. Products will soon arrive at your door steps.
                All products are cash on delivery so be ready with cash. Thank you and happy shopping.
              </p>
              <hr />
              <p className="mb-0">
               Also please rate our delivery service and products you purchased.
              </p>
            </Alert>
          </div>
    </div>
  );
};

export default Cart;
