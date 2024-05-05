import {Container, Nav, Navbar} from "react-bootstrap";

function Header() {

    return (
        <>
            <header>
                <Navbar expand={"lg"} bg={"dark"} data-bs-theme={"dark"} sticky="top" style={{height:"5vh"}}>
                    <Container>
                        <Navbar.Brand href={"/"}>
                            Groupmind
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className={"ms-auto"}>
                                <Nav.Link href={"/register"}>
                                    Register
                                </Nav.Link>
                                <Nav.Link href={"/login"}>
                                    Login
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </>
    )

}

export default Header;