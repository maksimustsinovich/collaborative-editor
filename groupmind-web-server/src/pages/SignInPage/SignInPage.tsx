import LoginForm from "../../Forms/LoginForm/LoginForm.tsx";
import {Container} from "react-bootstrap";

function SignInPage() {

    return (
        <>
            <Container className="d-flex justify-content-center align-items-center" style={{ height: "100%" }}>
                <Container style={{width: "30%"}}>
                    <LoginForm/>
                </Container>
            </Container>
        </>
    )

}

export default SignInPage;