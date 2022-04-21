
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"

import './Card1.scss'


export default function Card1(props) {
    const { link, id, data: { name, logo_path } } = props
    console.log('link', link);

    return (
        <div className="card-1">
            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={logo_path} />
                <Card.Body>
                    <Link to={`${link}/${id}`}>
                        <Card.Title>{name}</Card.Title>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )

}