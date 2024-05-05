import {Container} from "react-bootstrap";
import RegistrationForm from "../../Forms/RegistrationForm/RegistrationForm.tsx";

function SignUpPage() {

    return (
        <>
            <Container className="d-flex justify-content-center align-items-center" style={{height: "100%"}}>
                <Container style={{width: "30%"}}>
                    <RegistrationForm/>
                </Container>
            </Container>
        </>
    )

}

export default SignUpPage;