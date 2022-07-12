import React, {useState, useContext } from 'react';
import { useNavigate, useLocation } from "react-router-dom";

import { Card, CardBody, CardTitle, CardSubtitle, Table,CardFooter, Button , Alert} from "reactstrap";
import user1 from "../../assets/images/users/user1.jpg";
import user2 from "../../assets/images/users/user2.jpg";
import user3 from "../../assets/images/users/user3.jpg";
import user4 from "../../assets/images/users/user4.jpg";
import user5 from "../../assets/images/users/user5.jpg";

import { GlobalContext } from "../../state/global/GlobalContextProvider";
const TotalTable = ({prdtData}) => {
  const globalCtx = useContext(GlobalContext);
  const [visible, setVisible] = useState(false);
  let navigate = useNavigate();

  const onDismiss = () => {
    setVisible(false);
  };

  return (
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
                        src={prdtData.image}
                        className="rounded-circle"
                        alt="avatar"
                        width="45"
                        height="45"
                      />
                      <div className="ms-3">
                        <h6 className="mb-0">{prdtData.title}</h6>
                        <span className="text-muted">{prdtData.tag}</span>
                      </div>
                    </div>
                  </td>
                  {/* <td>{prdtData.tag}</td> */}
                  <td>{prdtData.cost}</td>
                  {/* <td>
                    {prdtData.status === "pending" ? (
                      <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>
                    ) : prdtData.status === "holt" ? (
                      <span className="p-2 bg-warning rounded-circle d-inline-block ms-3"></span>
                    ) : (
                      <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
                    )}
                  </td> */}
                  <td>{prdtData.discount}</td>
                  <td>{prdtData.finalPrice}</td>
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
  );
};

export default TotalTable;
