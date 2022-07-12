import React, { useContext, useEffect,useState } from 'react';
import { useLocation } from "react-router-dom";
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
} from "reactstrap";
const msg = new SpeechSynthesisUtterance()

const WishList = () => {
  const location = useLocation();
  const globalCtx = useContext(GlobalContext);
  const speechHandler = (value) => {
    console.log("cart Item spk",value);
    msg.text = value
  window.speechSynthesis.speak(msg)
}
useEffect(()=>{
// speechHandler("Listing products in wish list")
let tempRead=[]
globalCtx.globalState.allData.map((item,index)=>{
  if (item.wish){
    // console.log("cart Item");
    tempRead.push("Item name "+item.title+" and its cost is Rupees "+item.finalPrice)
  }
  
})
console.log("cart Item",tempRead.toString());
window.setInterval(speechHandler(tempRead.toString()),2000)



},[location.key])

  return (
    <div>
      {/* --------------------------------------------------------------------------------*/}
      {/* Card-1*/}
      {/* --------------------------------------------------------------------------------*/}
      <Card>
        <CardTitle tag="h6" className="border-bottom p-3 mb-0">
          <i className="bi bi-heart-fill"> </i>
          Wish List
        </CardTitle>
        <CardBody className="">
          <div className="mt-3">
            <Row>
              {globalCtx.globalState.allData.map((blg, index) => (
                <>
                {blg.wish? <Col sm="6" lg="6" xl="3" className={blg.selected ? "active" : ""} key={index}>
                  <Card>
                    <CardImg alt="Card image cap" src={blg.image} />
                    <CardBody className="p-4">
                      <CardTitle tag="h5">{blg.title}</CardTitle>
                      <i className="bi bi-heart-fill"> </i>
                    </CardBody>
                  </Card>
                </Col>:null}
                </>
              )
                
              )}
            </Row>
          </div>
        </CardBody>
      </Card>


      {/* --------------------------------------------------------------------------------*/}
      {/* End Inner Div*/}
      {/* --------------------------------------------------------------------------------*/}
    </div>
  );
};

export default WishList;
