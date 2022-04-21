import { Container, Navbar } from "react-bootstrap"
import logo from './../../assets/img/logo.png'

import './Menu.scss'


export default function Menu() {
    return (
        <>




            <Navbar bg="light" variant="dark">
                <Container>
                    <div>
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        <span style={{ fontSize: '22px', fontWeight: 'bold', color: 'black' }}>Ligas futbol</span>
                    </div>
                </Container>
            </Navbar>
        </>
    )
}

