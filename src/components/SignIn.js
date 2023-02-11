import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useContext } from 'react';
import userContext from '../utils/userContext';

const schema = yup.object().shape({
    email: yup.string()
        .email()
        .required(),
    password: yup.string()
        .min(6, 'Must be 6 characters')
        .max(6, 'Must be 6 characters')
        .required(),
});

const SignIn = ({ handleClose, getSetLocalStorage }) => {
    const { user, setUser } = useContext(userContext);

    return (
        <>
            <h2>Login</h2>
            <Formik
                validationSchema={schema}
                onSubmit={(e) => {
                    const data = { email: e.email, password: e.password };
                    // alert(JSON.stringify(data));
                    setUser({
                        ...user,
                        email: data.email
                    });

                    getSetLocalStorage("isLoggedIn", "true");
                    handleClose();
                }}
                initialValues={{
                    email: '',
                    password: '',
                }}
            >
                {({
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    values,
                    touched,
                    isValid,
                    errors,
                }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                        <Form.Group as={Col} controlId="validationFormik01">
                            <Form.Label>Email</Form.Label>

                            <Form.Control
                                type="email"
                                placeholder="jane@formik.com"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                isInvalid={!!errors.email}
                            />

                            <Form.Control.Feedback type="invalid">
                                {errors.email}
                            </Form.Control.Feedback>

                        </Form.Group>

                        <Form.Group as={Col} controlId="validationFormik02">
                            <Form.Label>Password</Form.Label>

                            <Form.Control
                                type="text"
                                placeholder="******"
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                                isInvalid={!!errors.password}
                            />

                            <Form.Control.Feedback type="invalid">
                                {errors.password}
                            </Form.Control.Feedback>

                        </Form.Group>

                        <Button
                            type="submit"
                            style={{ marginTop: "10px", background: "#fc8019", border: "#fc8019" }}
                        >Login</Button>
                    </Form>
                )}
            </Formik >
        </>
    );
}

export default SignIn;