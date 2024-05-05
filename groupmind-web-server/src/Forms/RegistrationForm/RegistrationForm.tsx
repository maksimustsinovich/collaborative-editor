import {useState} from "react";
import {Button, Form, Row, Stack} from "react-bootstrap";

function RegistrationForm() {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const form = event.currentTarget;

        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    }

    return (
        <>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Stack gap={3}>
                    <Form.Group as={Row} controlId={"username"}>
                        <Form.Label>
                            Username
                        </Form.Label>
                        <Form.Control required type={"text"} placeholder={"Username"}/>
                        <Form.Control.Feedback type={"invalid"}>
                            Username is required
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Row} controlId={"email"}>
                        <Form.Label>
                            Email
                        </Form.Label>
                        <Form.Control required type={"text"} placeholder={"Email"}/>
                        <Form.Control.Feedback type={"invalid"}>
                            Email is required
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Row} controlId={"password"}>
                        <Form.Label>
                            Password
                        </Form.Label>
                        <Form.Control required type={"password"} placeholder={"Password"}/>
                        <Form.Control.Feedback type={"invalid"}>
                            Passwords are required
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button type={"submit"}>
                        Login
                    </Button>
                </Stack>
            </Form>
        </>
    )


}

export default RegistrationForm;