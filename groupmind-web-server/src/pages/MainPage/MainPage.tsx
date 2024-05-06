import {Button, Container} from "react-bootstrap";

function MainPage() {

    return (
        <>
            <Container className="d-flex justify-content-center align-items-center" style={{height: "100%"}}>
                <Container className={"text-center"}>
                    <Button href={"/login"}>
                        Start!
                    </Button>
                </Container>
            </Container>
        </>
    )

}

export default MainPage;