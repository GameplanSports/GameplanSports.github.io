import NavbarLoggedIn from '../components/Navbar_logged_in';

export default function Dashboard() {
    return (
        <div style={{ minHeight: "100vh" }}>
            <NavbarLoggedIn />
            <h1>Welcome to the Dashboard!</h1>
        </div>
    )
}