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

import React, { useContext } from 'react';
import { useLocation,useNavigate } from "react-router-dom";
import { GlobalContext } from "../../state/global/GlobalContextProvider";

const SearchResultPage = () => {
  const location = useLocation();
  const globalCtx = useContext(GlobalContext);
  let navigate = useNavigate();
  console.log("location:", location);

  return (
    <div>
      <h6 className="border-bottom p-3 mb-0">
        <i className="bi bi-card-text"> </i>
        Search Result Page</h6>
      <Row>
        {globalCtx.globalState.allData.map((blg, index) => (
          <Col sm="6" lg="6" xl="3" className={blg.selected ? "active" : ""} key={index}>
            <Card>
              <CardImg alt="Card image cap" src={blg.image} />
              <CardBody className="p-4">
                <CardTitle tag="h5">{blg.title}</CardTitle>
                <CardSubtitle>{blg.subtitle}</CardSubtitle>
                <CardText className="mt-3">{blg.description}</CardText>
                <Button onClick={()=>{navigate('/detail',{state:{prdtData:blg}})}} color={blg.btnbg}>Read More</Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>

    </div>
  );
};

export default SearchResultPage;
