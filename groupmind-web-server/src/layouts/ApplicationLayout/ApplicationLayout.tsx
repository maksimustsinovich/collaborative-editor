import {Outlet} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import SideNavigation from "../../components/SideNavigation/SideNavigation.tsx";

function ApplicationLayout() {

    return (
        <>
            <Container fluid style={{padding: "0 0 0 0", height: '100%'}}>
                <Row style={{height: '100%', width: '100%'}}>
                    <Col xs={5} lg={2} className={"bg-dark"} style={{height:'100%'}}>
                        <SideNavigation/>
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