import { Row, Col, Table, Card, CardTitle, CardBody,Alert,CardFooter,Button } from "reactstrap";
import { useLocation,useNavigate } from "react-router-dom";
import { useEffect,useContext, useState } from "react";
import { GlobalContext } from "../../state/global/GlobalContextProvider";

const CheckOutPage = () => {
  const location = useLocation();
  let navigate = useNavigate();
  const globalCtx = useContext(GlobalContext);
  
  const [visible, setVisible] = useState(false);

  const onDismiss = () => {
    setVisible(false);
  };
  useEffect(()=>{
    if(location.state.prdtData){
      console.log("location.state:",location.state);
      if(globalCtx.globalState.checkOut){
        globalCtx.globalDispatch({ type: "BUYNOW"})
      }
    }
    else{
      navigate('/SearchResultPage')

    }
  })
  useEffect(()=>{
    if(globalCtx.globalState.cancelBuy){
      navigate('/SearchResultPage')
      globalCtx.globalDispatch({type:'CANCEL'})}
  },[globalCtx.globalState.cancelBuy])
  useEffect(()=>{
    if(globalCtx.globalState.confirmBuy){
      setVisible(true)
      globalCtx.globalDispatch({type:'CONFIRM'})
    }
  },[globalCtx.globalState.confirmBuy])
  return (
    <Row>      
      <Col lg="12">
      <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Product Listing</CardTitle>
          {/* <CardSubtitle className="mb-2 text-muted" tag="h6">
            Products you chose to buy
          </CardSubtitle> */}

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
              {/* {globalCtx.globalState.allData.map((tdata, index) => (
                <>
                {tdata.cart? */}
                {/* <tr key={index} className="border-top"> */}
                <tr className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <img
                        src={location.state.prdtData.image}
                        className="rounded-circle"
                        alt="avatar"
                        width="45"
                        height="45"
                      />
                      <div className="ms-3">
                        <h6 className="mb-0">{location.state.prdtData.title}</h6>
                        <span className="text-muted">{location.state.prdtData.tag}</span>
                      </div>
                    </div>
                  </td>
                  {/* <td>{location.state.prdtData.tag}</td> */}
                  <td>{location.state.prdtData.cost}</td>
                  {/* <td>
                    {location.state.prdtData.status === "pending" ? (
                      <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>
                    ) : location.state.prdtData.status === "holt" ? (
                      <span className="p-2 bg-warning rounded-circle d-inline-block ms-3"></span>
                    ) : (
                      <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
                    )}
                  </td> */}
                  <td>{location.state.prdtData.discount}</td>
                  <td>{location.state.prdtData.finalPrice}</td>
                </tr>
                {/* :null}
                </>
              ))} */}
            </tbody>
          </Table>
        </CardBody>
        <CardFooter>
          <Button color={"success"} onClick={()=>setVisible(true)}>Confirm Buy</Button>
          {" "}
          <Button color={"warning"} onClick={()=>{navigate('/SearchResultPage')}}>Cancel Buy</Button>
        </CardFooter>
      </Card>
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
      </Col>
    </Row>
  );
};

export default CheckOutPage;
