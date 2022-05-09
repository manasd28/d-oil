import React from 'react'
import "./Services.css";
import { Tab, Row, Col, Nav } from "react-bootstrap";

const Services = () => {
    return (
        <>
            <section id="departments" className="departments">
                <div className="container">
                    <div className="section-title">
                        <h2>Services</h2>
                        <p>We offer a variety of services. Some of them are even open for the public to see and test out themselves. Some of the key functionalities include getting the data securely, getting all the record of an organization. Admin can add new individuals and organizations easily.
                        </p>
                    </div>

                    <Tab.Container defaultActiveKey="first">
                        <Row>
                            <Col sm={3}>
                                <Nav className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">
                                            Details of Customers
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">
                                            Records of Oil transaction
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">
                                            Details of Companies
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fourth">
                                            Details of Distributers
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <div className="col-lg-8 details">
                                            <h3>Details of Customers</h3>
                                            <p className="fst-italic">
                                                Get the details of the customer using its Id or Ethereum Address.
                                            </p>
                                            <p>
                                                Each customer is assigned an unique id which can be used to get the details of the customer. Aside from the id, if the authorized person knows the address of the customer, then it can also access it's details.
                                                To Access the details of any customer, the customer itself must give the person authority, only registerd organizations can access the data without the authorization.
                                            </p>
                                        </div>
                                        <div className="col-lg-4 text-center">
                                            <img src="" alt="" className="img-fluid" />
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <div className="col-lg-8 details">
                                            <h3>Record of Oil transaction</h3>
                                            <p className="fst-italic">
                                                Get the records of the transactions (Company to Distributers, Distributer to Pump, Pump to Customer) using its Id or Ethereum Address.
                                            </p>
                                            <p>
                                                The authorized and registerd individuals can only get the details of the all the records of the transactions. Each customer/company/distributer is assigned an unique id which can be used to get the details.
                                            </p>
                                        </div>
                                        <div className="col-lg-4 text-center">
                                            <img src="" alt="" className="img-fluid" />
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <div className="col-lg-8 details">
                                            <h3>Details of Companies</h3>
                                            <p className="fst-italic">
                                                Get the details of an company using its Id or Ethereum Address.
                                            </p>
                                            <p>
                                                This is a public feature. It is availiable to anyone who has a crypto wallet and is ready to do some transactions. If the person trying to access this funtion knows the registerd Id of the company or it's Ehtereum address. Then it can be accessed.
                                            </p>
                                        </div>
                                        <div className="col-lg-4 text-center">
                                            <img src="" alt="" className="img-fluid" />
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fourth">
                                        <div className="col-lg-8 details">
                                            <h3>Details of Distributers/Organization</h3>
                                            <p className="fst-italic">
                                                Get the details of a registerd Distributer using its Id or Ethereum Address.
                                            </p>
                                            <p>
                                                This is a public feature. It is availiable to anyone who has a crypto wallet and is ready to do some transactions. If the person trying to access this funtion knows the registerd Id of the Organization or it's Ehtereum address. 
                                            </p>
                                        </div>
                                        <div className="col-lg-4 text-center">
                                            <img src="" alt="" className="img-fluid" />
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>
            </section>
        </>
    )
}

export default Services
