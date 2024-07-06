import NavbarDefault from '../components/Navbar_default';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Signup() {
    
    return (
        <>
            <h1 className='mb-3'>Create an account</h1>
            <p className='mb-3'>Enter your email to sign up for this app</p>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Confirm password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm password" />
                </Form.Group>
            </Form>
            <Button variant="primary" className='mb-3'>Sign up</Button>
            <p className='mb-3'>Already have an account? <a href="/signin">Sign in</a></p>
        </>
    )
}