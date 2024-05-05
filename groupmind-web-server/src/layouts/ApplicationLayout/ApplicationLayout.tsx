import {Outlet} from "react-router-dom";
import {Col, Container, Nav, Navbar, Row} from "react-bootstrap";

function ApplicationLayout() {

    return (
        <>
            <Container fluid style={{padding: "0 0 0 0", height: '100%'}}>
                <Row style={{height: '100%', width: '100%'}}>
                    <Col xs={2} className={"bg-dark"} style={{height:'100%'}}>
                        <Navbar expand={"s"} data-bs-theme={"dark"}>
                            <Container>
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