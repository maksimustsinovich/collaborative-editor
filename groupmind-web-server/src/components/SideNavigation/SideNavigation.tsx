import {Container, Nav, Navbar} from "react-bootstrap";

function SideNavigation() {

    return (
        <>
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
        </>
    )

}

export default SideNavigation;