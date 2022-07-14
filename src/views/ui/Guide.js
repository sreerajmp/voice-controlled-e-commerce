import { Row, Col, Card, CardBody, CardTitle, Button } from "reactstrap";

const Guide = () => {
  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-book me-2"> </i>
            Guide on this web app
          </CardTitle>
          <CardBody className="p-4">
            <Row justify-content>
              <Col lg="8">
                <h2 className="mt-4"><b>Voice Controlled E-Commerce App</b></h2>
                <h5 className=" mb-4">
                  <ul>
                    <li>
                      This a prototype project to use a web using voice control. Here a complete buying journey of a product can be done using voice command and final confirmation using keyboard command.

                    </li>
                    <li>
                      This project is done for the aid people with visual impairement so that can use there voice and hearing ability to do a product buy on there own.

                    </li>
                  </ul>
                  <h4><b>Voice Commands</b></h4>
                  Following are the Voice commands they are self-explainatory.
                  <ol>
                    <li>go to Search </li>
                    <li>search for shoe</li>
                    <li>search for shirt</li>
                    <li>search for jacket</li>
                    <li>read result</li>
                    <li>read next</li>
                    <li>read previous</li>
                    <li>show details</li>
                    <li>add to cart</li>
                    <li>go to cart</li>
                    <li>buy now</li>
                  </ol>


                  <h4><b>Keyboard Commands</b></h4>

                  Keyboard commands are added for activating voice command and final confirmation of product buying
                  <ol>
                    <li><b>Space bar</b>: to enable/disable voice command</li>
                    <li><b>key f</b>: to confirm buy</li>
                    <li><b>key j</b>: to cancel buy</li>
                  </ol>
                  <b> NOTE:</b><i>These keys have marking and are big in size so that helps in easy identification for visually imapired people. So that is the reason these keys are choosed. </i>
                </h5>

                <br />
                {/* <Button
                  className="mt-3"
                  color="primary"
                  href="https://wrappixel.com/templates/materialpro-react-admin/?ref=33"
                  target="_blank"
                >
                  Check Pro Version
                </Button> */}
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Guide;
