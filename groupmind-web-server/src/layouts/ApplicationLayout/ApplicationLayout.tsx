import {Outlet} from "react-router-dom";
import {Col, Container, Nav, Navbar, Row} from "react-bootstrap";

function ApplicationLayout() {

    return (
        <>
            <Container fluid style={{padding: '0'}}>
                <Row>
                    <Col xs={3} sm={3} md={2} lg={2} xl={2}>
                        <Navbar expand={"s"} bg={"dark"} data-bs-theme={"dark"}>
                            <Container style={{height: "100%"}}>
                                <Nav>
                                    <Nav.Link href={"/app/"}>
                                        Profile
                                    </Nav.Link>
                                    <Nav.Link href={"/app/messages"}>
                                        Messages
                                    </Nav.Link>
                                    <Nav.Link href={"/app/documents"}>
                                        Documents
                                    </Nav.Link>
                                </Nav>
                            </Container>
                        </Navbar>
                    </Col>
                    <Col>
                        <Outlet/>
                    </Col>
                </Row>
            </Container>
        </>
    )

}

export default ApplicationLayout;