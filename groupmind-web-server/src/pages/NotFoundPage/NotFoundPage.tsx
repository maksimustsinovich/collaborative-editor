import {Container} from "react-bootstrap";

function NotFoundPage() {

    return (
        <>
            <Container className={"d-flex justify-content-center align-items-center"} style={{height: "100%"}}>
                <Container className={"text-center"}>
                    <h1>¯\_(ツ)_/¯</h1>
                    <h1>Not found</h1>
                </Container>
            </Container>
        </>
    )

}

export default NotFoundPage;