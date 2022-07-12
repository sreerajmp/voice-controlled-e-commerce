import { useEffect,useContext, useState } from "react";
import { Row, Col, Card, CardBody, CardTitle, Button,Badge } from "reactstrap";
import { useLocation,useNavigate } from "react-router-dom";
import { GlobalContext } from "../../state/global/GlobalContextProvider";
const msg = new SpeechSynthesisUtterance()


const DetailPage = () => {
  const location = useLocation();
  let navigate = useNavigate();
  const globalCtx = useContext(GlobalContext);
  const speechHandler = (value) => {
    msg.text = value
    window.speechSynthesis.speak(msg)
  }

const [prdtData,setPrdtData]=useState({})
  useEffect(()=>{
    if(location.state.prdtData){
      console.log("location.state:",location.state);
      setPrdtData(location.state.prdtData)
      speechHandler("product name is "+location.state.prdtData.title+". It is "+location.state.prdtData.description+". Its actual cost is Rupees "+location.state.prdtData.cost+"  but at lets buy you will get a discount of Rupees "+location.state.prdtData.discount+"  so final price is Rupees "+location.state.prdtData.finalPrice)
    }
    else{
      navigate('/SearchResultPage')

    }

  },[])

  useEffect(()=>{
    if(globalCtx.globalState.checkOut){
      goToCheckOut()
    }

  },[globalCtx.globalState.checkOut])

 const goToCheckOut=()=>{
    navigate('/CheckOutPage',{state:{prdtData:prdtData}})
  }
  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="ri-star-fill me-2"> </i>
            Detail Page
          </CardTitle>
          <CardBody className="p-4">
            <Row>
              <Col lg="8">
                <h2 className="mt-4">{prdtData.title}</h2>
                <h5 className=" mb-4">
                  {prdtData.description}
                </h5>
                <img
                  src={prdtData.image}
                  alt="my"
                />
                <div>
                <Button color="primary" outline>
                  Cost <Badge color="primary">{prdtData.cost}</Badge>
                </Button>
                {" "}
                <Button color="secondary" className="ms-3" outline>
                  Discount <Badge color="info">{prdtData.discount}</Badge>
                </Button>
                {" "}
                <Button color="info" className="ms-3" outline>
                  LetsBuy Price <Badge color="success">{prdtData.finalPrice}</Badge>
                </Button>
               
              </div>
                <br />
                <Button
                  className="mt-3"
                  color="primary"
                  onClick={()=>goToCheckOut()}

                >
                  Buy Now
                </Button>
                {" "}
                <Button
                  className="mt-3"
                  color="danger"
                  onClick={()=>globalCtx.globalDispatch({ type: "WISH", payload: prdtData.id })}
                >
                  Wish List
                </Button>
                {" "}

                <Button
                  className="mt-3"
                  color="warning"
                  onClick={()=>globalCtx.globalDispatch({ type: "CART", payload: prdtData.id })}

                >
                 Add to cart
                </Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default DetailPage;
