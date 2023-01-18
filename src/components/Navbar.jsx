import {Button, Container, Navbar, Modal, } from 'react-bootstrap';

const NavbarContainer = () => {
    return (
        <div>
            <Navbar expand="sm">
                <Navbar.Brand href="/">
                        Tickets 
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <img className='logo' src="https://static.wixstatic.com/media/af1ca2_a1a9ff5bce1e415da681a312621ab26b~mv2.png/v1/fill/w_304,h_108,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/af1ca2_a1a9ff5bce1e415da681a312621ab26b~mv2.png" alt="logo" ></img>
                    <Button>Cart 0 Items</Button>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default NavbarContainer;