import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

export default function DefaultNavbar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#/">Gameplan</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link href='#/signin' className='m-3'>
                        <Button style={{ backgroundColor: '#0F3E67', borderColor: '#0F3E67', '&:hover': { backgroundColor: '#0C2A4D' } }}>Sign in</Button>
                    </Nav.Link>
                    <Nav.Link href='#/signup' className='m-3'>
                        <Button style={{ backgroundColor: '#1188F0', borderColor: '#1188F0', '&:hover': { backgroundColor: '#0D75C2' } }}>Sign up</Button>
                    </Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}